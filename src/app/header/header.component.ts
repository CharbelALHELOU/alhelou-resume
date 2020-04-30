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

  myFunction() {
    if (window.pageYOffset > document.getElementById("navBar").offsetTop) {
      return true;
    } else {
      return false;
    }
  }


 
}
