import { useMemo, useRef, useState } from 'react';
import Hls from 'hls.js';
import { Radio, Tv, Search, Play, Pause, Volume2, VolumeX, Maximize2, RotateCcw } from 'lucide-react';
import { DEFAULT_STATIONS } from './data/stations.ts';
import { TURKSAT_TV_CHANNELS } from './data/tvChannels.ts';
import type { RadioStation, TvChannel } from './types.ts';

type Mode = 'tv' | 'radio';

function StreamPlayer({ mode, radio, tv }: { mode: Mode; radio?: RadioStation; tv?: TvChannel }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const hlsRef = useRef<Hls | null>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const source = mode === 'tv' ? tv?.streamUrl : radio?.streamUrl;

  const stop = () => {
    hlsRef.current?.destroy(); hlsRef.current = null;
    if (videoRef.current) { videoRef.current.pause(); videoRef.current.removeAttribute('src'); videoRef.current.load(); }
    if (audioRef.current) { audioRef.current.pause(); audioRef.current.removeAttribute('src'); audioRef.current.load(); }
    setPlaying(false);
  };
  const play = () => {
    if (!source) return;
    stop();
    const media = mode === 'tv' ? videoRef.current : audioRef.current;
    if (!media) return;
    if (mode === 'tv' && source.includes('.m3u8') && Hls.isSupported()) {
      const hls = new Hls({ enableWorker: true, maxBufferLength: 30, manifestLoadingMaxRetry: 3 });
      hlsRef.current = hls;
      hls.loadSource(source); hls.attachMedia(media as HTMLVideoElement);
      hls.on(Hls.Events.MANIFEST_PARSED, () => (media as HTMLMediaElement).play().then(() => setPlaying(true)).catch(() => {}));
      hls.on(Hls.Events.ERROR, (_e,d) => { if (d.fatal) { hls.destroy(); setPlaying(false); }});
    } else {
      media.src = source;
      media.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
    }
  };
  const toggleMute = () => {
    const next = !muted; setMuted(next);
    if (videoRef.current) videoRef.current.muted = next;
    if (audioRef.current) audioRef.current.muted = next;
  };
  return <section className="player">
    {mode === 'tv' ? <video ref={videoRef} className="media" controls playsInline onPause={() => setPlaying(false)} onPlay={() => setPlaying(true)} /> :
      <div className="radio-visual"><Radio size={72}/><div>{radio?.name ?? 'Radyo seçin'}</div></div>}
    <div className="controls">
      <button onClick={() => playing ? stop() : play()} className="primary">{playing ? <Pause/> : <Play/>}{playing ? 'Durdur' : 'Oynat'}</button>
      <button onClick={toggleMute}>{muted ? <VolumeX/> : <Volume2/>}</button>
      {mode === 'tv' && <button onClick={() => videoRef.current?.requestFullscreen?.()}><Maximize2/></button>}
      <button onClick={stop}><RotateCcw/></button>
    </div>
    <p className="now">{mode === 'tv' ? tv?.name : radio?.name}</p>
  </section>;
}

export default function App() {
  const [mode, setMode] = useState<Mode>('tv');
  const [query, setQuery] = useState('');
  const [radio, setRadio] = useState(DEFAULT_STATIONS[0]);
  const [tv, setTv] = useState(TURKSAT_TV_CHANNELS[0]);
  const radios = useMemo(() => DEFAULT_STATIONS.filter(x => x.name.toLocaleLowerCase('tr-TR').includes(query.toLocaleLowerCase('tr-TR'))), [query]);
  const tvs = useMemo(() => TURKSAT_TV_CHANNELS.filter(x => x.name.toLocaleLowerCase('tr-TR').includes(query.toLocaleLowerCase('tr-TR'))), [query]);
  const list = mode === 'tv' ? tvs : radios;
  return <main>
    <header><div><b>CENGİZ TV</b><span> • TV & RADYO</span></div><div className="badge">MEHMET CENGİZ AKDAĞ</div></header>
    <nav>
      <button className={mode==='tv'?'active':''} onClick={()=>setMode('tv')}><Tv/> CANLI TV</button>
      <button className={mode==='radio'?'active':''} onClick={()=>setMode('radio')}><Radio/> RADYO</button>
      <label><Search/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Kanal veya radyo ara..." /></label>
    </nav>
    <div className="layout">
      <StreamPlayer mode={mode} radio={radio} tv={tv}/>
      <aside><h2>{mode==='tv'?'TV Kanalları':'Radyo Kanalları'}</h2><div className="list">
        {list.map(item => {
          const selected = mode==='tv' ? (item as TvChannel).id===tv.id : (item as RadioStation).id===radio.id;
          return <button className={selected?'item selected':'item'} key={item.id} onClick={()=> mode==='tv' ? setTv(item as TvChannel) : setRadio(item as RadioStation)}>
            <span className="num">{mode==='tv'?'TV':'FM'}</span><span><b>{item.name}</b><small>{'resolution' in item ? item.resolution : item.genre}</small></span>
          </button>;
        })}
      </div></aside>
    </div>
    <footer>Otomatik güncelleme • Android • Android TV / Mi Box • Web</footer>
  </main>;
}
