import type {RadioStation} from '../types.ts';
export const DEFAULT_STATIONS:RadioStation[]=[
{id:'diyanet',name:'Diyanet Radyo',language:'turkish',category:'ilahi',genre:'İlahi · Dini & Sohbet',city:'Ankara',streamUrl:'https://eustr73.mediatriple.net/videoonlylive/mtikoimxnztxlive/broadcast_5e3c1171d7d2a.smil/playlist.m3u8',format:'HLS'},
{id:'diyanet-kuran',name:"Diyanet Kur'an Radyo",language:'turkish',category:'ilahi',genre:"Kur'an-ı Kerim",city:'Ankara',streamUrl:'https://eustr73.mediatriple.net/videoonlylive/mtikoimxnztxlive/broadcast_5e3c14192aa92.smil/playlist.m3u8',format:'HLS'},
{id:'akra',name:'Akra FM',language:'turkish',category:'ilahi',genre:'Tasavvuf · İlahi',city:'İstanbul',streamUrl:'https://d3r5bwwuab2v60.cloudfront.net/akracanli2/_definst_/livestream_aac/playlist.m3u8',format:'HLS'},
{id:'trt-fm',name:'TRT FM',language:'turkish',category:'pop',genre:'Ulusal · Pop & Karma',city:'İstanbul',streamUrl:'https://radio-trtfm.live.trt.com.tr/master.m3u8',format:'HLS'},
{id:'trt-turku',name:'TRT Türkü',language:'turkish',category:'turku',genre:'Türk Halk Müziği',city:'Ankara',streamUrl:'https://rd-trtturku.medya.trt.com.tr/master_128.m3u8',format:'HLS'},
{id:'super-fm',name:'Süper FM',language:'turkish',category:'pop',genre:'Türkçe Pop',city:'İstanbul',streamUrl:'https://playerservices.streamtheworld.com/api/livestream-redirect/SUPER_FMAAC_SC',format:'AAC'},
{id:'joy-turk',name:'Joy Türk',language:'turkish',category:'slow',genre:'Akustik & Slow',city:'İstanbul',streamUrl:'https://playerservices.streamtheworld.com/api/livestream-redirect/JOY_TURK_SC',format:'AAC'},
{id:'kral-fm',name:'Kral FM',language:'turkish',category:'arabesk',genre:'Arabesk & Fantezi',city:'İstanbul',streamUrl:'https://ssldyg.radyotvonline.com/smil/smil:kralfm.smil/playlist.m3u8',format:'HLS'},
{id:'ntv',name:'NTV Radyo',language:'turkish',category:'haber',genre:'Haber & Belgesel',city:'İstanbul',streamUrl:'https://ntvradyo.radyotvonline.net/ntvradyomp3',format:'MP3'},
{id:'lalegul',name:'Lalegül FM',language:'turkish',category:'ilahi',genre:'İlahi · Sohbet',city:'İstanbul',streamUrl:'https://icecast.netmedya.net/lalegulfm',format:'MP3'},
{id:'radyo-voyage',name:'Radyo Voyage',language:'turkish',category:'ozgun',genre:'Dünya & Etnik',city:'İstanbul',streamUrl:'http://voyagewmp.radyotvonline.com/;stream.mp3',format:'MP3',needsProxy:true},
{id:'alem',name:'Alem FM',language:'turkish',category:'pop',genre:'Pop & Sohbet',city:'İstanbul',streamUrl:'https://turkmedya.radyotvonline.net/alemfmaac',format:'AAC'},
{id:'trt-nagme',name:'TRT Nağme',language:'turkish',category:'ozgun',genre:'Türk Sanat Müziği',city:'İstanbul',streamUrl:'https://rd-trtnagme.medya.trt.com.tr/master_128.m3u8',format:'HLS'},
{id:'slow-turk',name:'Slow Türk',language:'turkish',category:'slow',genre:'Türkçe Slow',city:'İstanbul',streamUrl:'https://radyo.duhnet.tv/slowturk',format:'MP3',needsProxy:true},
{id:'radyo-fenomen',name:'Radyo Fenomen',language:'turkish',category:'pop',genre:'Hit & Dans',city:'İstanbul',streamUrl:'https://live.radyofenomen.com/fenomen/128/icecast.audio',format:'AAC'}];