import type {TvChannel} from '../types.ts';
export const TURKSAT_TV_CHANNELS:TvChannel[]=[
{id:'kanal-d',name:'Kanal D',category:'ulusal',resolution:'1080p Full HD',streamUrl:'https://demiroren.daioncdn.net/kanald/kanald.m3u8?app=kanald_web&ce=3',needsProxy:true,satellite:'Türksat 4A'},
{id:'star',name:'Star TV',category:'ulusal',resolution:'720p HD',streamUrl:'https://dogus.daioncdn.net/startv/startv_720p.m3u8?app=a20ac41e-bdc3-4aa1-934d-26b484480ac9&ce=3',needsProxy:true,satellite:'Türksat 4A'},
{id:'tv8',name:'TV8',category:'ulusal',resolution:'1080p Full HD',streamUrl:'https://tv8.daioncdn.net/tv8/tv8.m3u8?app=7ddc255a-ef47-4e81-ab14-c0e5f2949788&ce=3',needsProxy:true,satellite:'Türksat 4A'},
{id:'trt1',name:'TRT 1',category:'ulusal',resolution:'1080p Full HD',streamUrl:'https://tv-trt1.medya.trt.com.tr/master.m3u8',needsProxy:true,satellite:'Türksat 4A'},
{id:'trt-haber',name:'TRT Haber',category:'haber',resolution:'720p HD',streamUrl:'https://tv-trthaber.medya.trt.com.tr/master.m3u8',satellite:'Türksat 4A'},
{id:'trt-turk',name:'TRT Türk',category:'ulusal',resolution:'720p HD',streamUrl:'https://tv-trtturk.medya.trt.com.tr/master.m3u8',satellite:'Türksat 4A'},
{id:'trt-muzik',name:'TRT Müzik',category:'kultur',resolution:'1080p Full HD',streamUrl:'https://stream8.cinerama.uz/1208/tracks-v1a1/mono.m3u8',needsProxy:true,satellite:'Türksat 4A'},
{id:'diyanet-tv',name:'Diyanet TV',category:'dini',resolution:'1080p Full HD',streamUrl:'https://eustr73.mediatriple.net/videoonlylive/mtikoimxnztxlive/broadcast_5e3bf95a47e07.smil/playlist.m3u8',needsProxy:true,satellite:'Türksat 4A'},
{id:'ntv',name:'NTV',category:'haber',resolution:'1080p Full HD',streamUrl:'https://dogus.daioncdn.net/ntv/ntv.m3u8?app=ntv_web',needsProxy:true,satellite:'Türksat 4A'},
{id:'haberturk',name:'Habertürk',category:'haber',resolution:'720p HD',streamUrl:'https://tv.ensonhaber.com/haberturk/haberturk.m3u8',satellite:'Türksat 4A'},
{id:'halktv',name:'Halk TV',category:'haber',resolution:'1080p Full HD',streamUrl:'https://halktv-live.daioncdn.net/halktv/halktv.m3u8',satellite:'Türksat 4A'},
{id:'a-spor',name:'A Spor',category:'spor',resolution:'1080p Full HD',streamUrl:'https://rnttwmjcin.turknet.ercdn.net/lcpmvefbyo/aspor/aspor.m3u8',satellite:'Türksat 4A'},
{id:'trt-spor',name:'TRT Spor',category:'spor',resolution:'1080p Full HD',streamUrl:'https://trt.daioncdn.net/trtspor/master.m3u8?app=web&platform=trtspor',needsProxy:true,satellite:'Türksat 4A'},
{id:'trt2',name:'TRT 2',category:'kultur',resolution:'1080p Full HD',streamUrl:'https://tv-trt2.medya.trt.com.tr/master.m3u8',needsProxy:true,satellite:'Türksat 4A'},
{id:'tv4',name:'TV4',category:'sinema',resolution:'720p HD',streamUrl:'https://turkmedya-live.ercdn.net/tv4/tv4.m3u8',needsProxy:true,satellite:'Türksat 4A'}];