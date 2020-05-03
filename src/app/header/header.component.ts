import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
