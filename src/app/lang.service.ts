import { Injectable } from '@angular/core';
import { AllowedLangs, ILangSet, LANGS, Ilang } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class LangService {
  language: AllowedLangs = "en";
  private _langs: ILangSet;

  get translation(): ILangSet{
    console.log("OKKKKKKkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkKK");
    console.log(this._langs.menu.home.toLowerCase());
    return this._langs;
  }

  constructor() {
    this.language = localStorage.getItem('language') as AllowedLangs || "en";
    this.changeLang(this.language);
   }

  changeLang(language: AllowedLangs){
    this.language = language;
    localStorage.setItem('language', language);
    this._langs = LANGS[this.language];
  }
}
