import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  open : boolean = false;
  scrolled: boolean = false;
  s = screen;
  
  constructor() { }

  ngOnInit(): void {   
    window.addEventListener('scroll', this.scroll, true);
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.scroll, true);
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
 
}
