import { Component, OnInit } from '@angular/core';
import { IMenuLangSet, AllowedLangs } from '../constants';
import { LangService } from '../services/lang.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  translations: IMenuLangSet  = null;
  language:AllowedLangs = "en";

  open : boolean = false;
  scrolled: boolean = false;
  s = screen;

  constructor(private lang: LangService) { }

  ngOnInit(): void {   
    window.addEventListener('scroll', this.scroll);
    this.language = this.lang.language;
    this.changeLang(this.language);
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.scroll);
  }

  scroll = (event): void => {
    if (window.pageYOffset > (document.getElementById('navBar').offsetTop)) {
      this.scrolled = true;
    } else {
      this.scrolled = false;
    }
  };

  
  clicked(){
    this.open = !this.open;
  };

  changeLang(language:AllowedLangs){
    this.language = language;
    this.lang.changeLang(language);
    this.translations = this.lang.translation.menu
  }

 
}
