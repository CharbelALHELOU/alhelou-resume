import { Component, OnInit } from '@angular/core';
import { IHomeLangSet, ILangSet } from '../constants';
import { LangService } from '../services/lang.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  translation:IHomeLangSet = null;  
  constructor(private lang:LangService) { }

  ngOnInit(): void {
    this.lang.translation$.subscribe((t:ILangSet) => {
      this.translation= t.home;
    })
  }
}
