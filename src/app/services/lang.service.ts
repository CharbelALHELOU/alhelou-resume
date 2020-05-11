import { Injectable } from '@angular/core';
import { AllowedLangs, ILangSet, LANGS } from '../constants';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LangService {
  language: AllowedLangs = "en";
  private _langs:ILangSet = LANGS[this.language];
  translation$:BehaviorSubject<ILangSet> = new BehaviorSubject<ILangSet>(this._langs);
  get translation():ILangSet{
    return this._langs;
  }

  constructor() {
    this.language = localStorage.getItem('language') as AllowedLangs || "en";
    this.changeLang(this.language);

  }

  changeLang(language: AllowedLangs) {
    this.language = language;
    localStorage.setItem('language', language);
    this._langs = LANGS[this.language];
    this.translation$.next(this.translation);
  }
}
