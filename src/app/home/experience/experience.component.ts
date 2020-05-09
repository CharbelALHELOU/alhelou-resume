import { Component, OnInit } from '@angular/core';
import { InfoService } from 'src/app/info.service';
import { Experience } from 'src/app/models/experience';
import { of } from 'rxjs';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  items : Experience[];

  constructor(private service : InfoService ) {     
  }

  ngOnInit(): void {
    this.service.fetchExperienceItems().subscribe((items : Experience[]) => {
      // sort the experiences by date of beginning
      items.sort(function(a,b){
        let c = new Date(a.start);
        let d = new Date(b.start);
        if (c.getFullYear() == d.getFullYear() ){
          return (c.getMonth() - d.getMonth());
        }
        return ( c.getFullYear() - d.getFullYear());
      });
      this.items = items;
    });
  }




}
