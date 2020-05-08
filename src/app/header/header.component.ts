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
      let Otop = element.offsetTop;
      if (window.pageYOffset > (Otop-10) && window.pageYOffset <= (Otop + 0.7*window.innerHeight) ) {
        return true;
      } else {
        return false;
      }
  }
  }

  scrollToId(id: string){
    let element = document.getElementById( id )
    
    element.scrollTo({
      top: 100,
      left: 100,
      behavior: 'smooth'
    });console.log(id);
  }

  stickyNavBar() {
    if (window.pageYOffset > document.getElementById('navBar').offsetTop+10) {
      return true;
    } else {
      return false;
    }
  }

 
}
