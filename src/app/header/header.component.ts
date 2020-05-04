import { Component, OnInit } from '@angular/core';
import { IMenuLangSet, AllowedLangs } from '../../constants';
import { LangService } from '../lang.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  translations: IMenuLangSet = null;
  language: AllowedLangs = "en" ;
  constructor(private lang: LangService) { }

  ngOnInit(): void {
    this.language = this.lang.language;
    this.changeLang(this.language);
    
  }

  changeLang(language: AllowedLangs){
    this.language = language;
    this.lang.changeLang(language);
    this.translations = this.lang.translation.menu;
  }


  statusOpen : boolean = false;
  inTheMain : boolean = false;

  clicked(){
    this.statusOpen = !this.statusOpen;
  };

  passedBy(idOfElement: string) {
    let Otop = document.getElementById(idOfElement).offsetTop;
    if (window.pageYOffset > (Otop-10) && window.pageYOffset <= (Otop + 0.7*window.innerHeight) ) {
      return true;
    } else {
      return false;
    }
  }

  stickyNavBar() {
    if (window.pageYOffset > document.getElementById('navBar').offsetTop) {
      return true;
    } else {
      return false;
    }
  }

 
}
