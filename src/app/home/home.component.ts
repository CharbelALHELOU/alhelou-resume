import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../portfolio.service';
import { PortofolioItem } from '../models/portofolioItem';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  portfolioItems: PortofolioItem[];

  constructor(private works: PortfolioService) {
    this.portfolioItems = works.items;
  }

  ngOnInit(): void {
    this.works.fetchItems()
    .subscribe((items: PortofolioItem[])=>{
      this.works.items =items;
      this.portfolioItems = items;
     })
  }

}
