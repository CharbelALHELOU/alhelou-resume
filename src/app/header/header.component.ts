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
    console.log(status);
  };

  passedBy(idOfElement: string) {
    var element = document.getElementById(idOfElement);
    if (element){
      let top = element.offsetTop;
      return (top < (window.pageYOffset + window.innerHeight) && (top + 0.7*window.innerHeight) >= window.pageYOffset)
  }
  }

 

  stickyNavBar() {
    if (window.pageYOffset > document.getElementById('navBar').offsetTop+10) {
      return true;
    } else {
      return false;
    }
  }

 
}
