import { Component, OnInit } from '@angular/core';
import { InfoService } from 'src/app/info.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { PortofolioItem } from 'src/app/models/portofolio-item';

@Component({
  selector: 'app-portfolio-details',
  templateUrl: './portfolio-details.component.html',
  styleUrls: ['./portfolio-details.component.css']
})
export class PortfolioDetailsComponent implements OnInit {

  id: number;
  item: PortofolioItem = new PortofolioItem();
  routeSub: Subscription
  
  constructor(private service: InfoService,
    private activatedRoute: ActivatedRoute) {   }

  ngOnInit(): void {
    this.routeSub = this.activatedRoute
      .paramMap
      .subscribe((params) => { // we subscribe to the activated route observable
        console.log(params);
        this.id = parseInt(params.get("id"));
      })

    this.service.getPortfolioItem(this.id)
      .subscribe((items: PortofolioItem[])=>{
        this.item = items[0];
        
      });  
    document.getElementById('navBar').classList.add("hide");
  }

  putNavBar(){
    document.getElementById('navBar').classList.remove("hide");
  }

}
