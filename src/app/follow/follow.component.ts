import { Component, OnInit } from '@angular/core';
import { IFollowLangSet, ILangSet } from '../constants';
import { LangService } from '../services/lang.service';

@Component({
  selector: 'app-follow',
  templateUrl: './follow.component.html',
  styleUrls: ['./follow.component.css']
})
export class FollowComponent implements OnInit {

  translation:IFollowLangSet = null;  
  constructor(private lang:LangService) { }

  ngOnInit(): void {
    this.lang.translation$.subscribe((t:ILangSet) => {
      this.translation= t.follow;
    })
  }
}
