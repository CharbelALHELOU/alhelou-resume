import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InfoService } from 'src/app/services/info.service';
import { Subscription } from 'rxjs';
import { PortofolioItem } from 'src/app/models/portofolio-item';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  id: number;
  item: PortofolioItem = new PortofolioItem();
  routeSub: Subscription;
  more: boolean = true;

  constructor(private activatedRoute: ActivatedRoute,
    private service: InfoService) { }

  ngOnInit(): void {
    this.routeSub = this.activatedRoute
      .paramMap
      .subscribe((params) => {
        console.log(params);
        this.id = parseInt(params.get("id"));
      });

    this.service.getPortfolioItem(this.id)
    .subscribe((items :PortofolioItem[]) => {
      this.item = items[0];
      console.log(this.item);
    })
  }

}
