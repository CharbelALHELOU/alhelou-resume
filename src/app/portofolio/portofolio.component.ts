import { Component, OnInit } from '@angular/core';
import { PortofolioItem } from '../models/portofolioItem';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-portofolio',
  templateUrl: './portofolio.component.html',
  styleUrls: ['./portofolio.component.css']
})
export class PortofolioComponent implements OnInit {

  items : PortofolioItem[];
  status : boolean[] = [false,false,false];

  constructor() { 
    this.items= [
      {
        id:0,
        description:"dgfdghwfhdhedsd",
        title: "bldshshh",
        img: "../../assets/portfolio/01-thumbnail.jpg",
        url: "https://github.com/CharbelALHELOU/alhelou-resume"
      },
      {
        id:1,
        description:"dgfdghwfhdhedsd",
        title: "bldshshh",
        img: "../../assets/portfolio/01-thumbnail.jpg",
        url: "https://github.com/CharbelALHELOU/alhelou-resume"
      },
      {
        id:2,
        description:"dgfdghwfhdhedsd",
        title: "bldshshh",
        img: "../../assets/portfolio/01-thumbnail.jpg",
        url: "https://github.com/CharbelALHELOU/alhelou-resume"
      },
      {
        id:3,
        description:"dgfdghwfhdhedsd",
        title: "bldshshh",
        img: "../../assets/portfolio/01-thumbnail.jpg",
        url: "https://github.com/CharbelALHELOU/alhelou-resume"
      },
      {
        id:4,
        description:"dgfdghwfhdhedsd",
        title: "bldshshh",
        img: "../../assets/portfolio/01-thumbnail.jpg",
        url: "https://github.com/CharbelALHELOU/alhelou-resume"
      }
    ]
    
  }

  

  ngOnInit(): void {
    
  }

  changeStatus(i: number){
    console.log(i);
    this.status[i] = !this.status[i] ;
  }

}
