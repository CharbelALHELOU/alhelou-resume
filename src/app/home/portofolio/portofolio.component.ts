import { Component, OnInit, Input } from '@angular/core';
import { PortofolioItem } from '../../models/portofolio-item';
import { Title } from '@angular/platform-browser';
import { InfoService } from 'src/app/info.service';

@Component({
  selector: 'app-portofolio',
  templateUrl: './portofolio.component.html',
  styleUrls: ['./portofolio.component.css']
})
export class PortofolioComponent implements OnInit {

  items : PortofolioItem[];
  status : boolean[] = [false,false,false];
  moreStatus: boolean = false;

  constructor(private service : InfoService ) {     
  }

  ngOnInit(): void {
    this.service.fetchPortfolioItems().subscribe((items : PortofolioItem[]) => {
      this.items = items;
    });
  }

  changeStatus(i: number){
    console.log(i);
    this.status[i] = !this.status[i] ;
  }
}
