import { Component, OnInit} from '@angular/core';
import { Msg } from 'src/app/models/msg';
import { MessagesService } from 'src/app/services/messages.service';
import { LangService } from '../services/lang.service';
import { IContactLangSet, ILangSet } from '../constants';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  translation: IContactLangSet = null;
  msg: Msg = new Msg();
  submitted: boolean = false;

  constructor( private messenger: MessagesService, private lang: LangService) {
   }

  ngOnInit(): void {
    this.lang.translation$.subscribe((t:ILangSet) => {
      this.translation= t.contact
    })
  }


  processForm(msg: Msg){
    console.log(msg);
    document.getElementById('posted').classList.add('visible');
    this.messenger.addMsg( msg ).subscribe((msg: Msg) => { })
    this.submitted = true;
  }

}
