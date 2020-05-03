import { Component, OnInit, Input } from '@angular/core';
import { PortofolioItem } from '../../models/portofolioItem';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-portofolio',
  templateUrl: './portofolio.component.html',
  styleUrls: ['./portofolio.component.css']
})
export class PortofolioComponent implements OnInit {

  @Input()  items : PortofolioItem[];
  status : boolean[] = [false,false,false];
  moreStatus: boolean = false;

  constructor() {     
  }

  

  ngOnInit(): void {
    
  }

  changeStatus(i: number){
    console.log(i);
    this.status[i] = !this.status[i] ;
  }
}
