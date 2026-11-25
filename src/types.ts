export type StationLanguage='turkish';
export type StationCategory='ilahi'|'arabesk'|'ozgun'|'turku'|'pop'|'slow'|'haber';
export interface RadioStation{id:string;name:string;language:StationLanguage;category:StationCategory;genre:string;city:string;streamUrl:string;format:'MP3'|'AAC'|'HLS';bitrate?:number;needsProxy?:boolean;}
export interface TvChannel{id:string;name:string;category:'ulusal'|'spor'|'sinema'|'haber'|'dini'|'kultur';resolution:string;streamUrl:string;needsProxy?:boolean;satellite:string;}
