import { Component, OnInit } from '@angular/core';
import { PortofolioItem } from '../../models/portofolioItem';
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
        description:"Here we have a small description of the project i can be whatever you want. For example you can talck about the client, the language, the dates etc... also so it can be refered to, there's a link to learn more about it",
        title: "Title 1",
        img: "../../assets/bg2.jpg",
        url: "https://github.com/CharbelALHELOU/alhelou-resume"
      },
      {
        id:1,
        description:"Here we have a small description of the project i can be whatever you want. For example you can talck about the client, the language, the dates etc... also so it can be refered to, there's a link to learn more about it",
        title: "Title 2",
        img: "../../assets/bg2.jpg",
        url: "https://github.com/CharbelALHELOU/alhelou-resume"
      },
      {
        id:2,
        description:"Here we have a small description of the project i can be whatever you want. For example you can talck about the client, the language, the dates etc... also so it can be refered to, there's a link to learn more about it",
        title: "Title 3",
        img: "../../assets/bg2.jpg",
        url: "https://github.com/CharbelALHELOU/alhelou-resume"
      },
      {
        id:3,
        description:"Here we have a small description of the project i can be whatever you want. For example you can talck about the client, the language, the dates etc... also so it can be refered to, there's a link to learn more about it",
        title: "Title 4",
        img: "../../assets/bg2.jpg",
        url: "https://github.com/CharbelALHELOU/alhelou-resume"
      },
      {
        id:4,
        description:"Here we have a small description of the project i can be whatever you want. For example you can talck about the client, the language, the dates etc... also so it can be refered to, there's a link to learn more about it",
        title: "Title 5",
        img: "../../assets/bg2.jpg",
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
