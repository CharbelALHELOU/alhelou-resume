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
      this.items = items;
    });
  }


}
