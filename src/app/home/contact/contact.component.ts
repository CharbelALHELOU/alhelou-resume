import { Component, OnInit } from '@angular/core';
import { Msg } from 'src/app/models/msg';
import { MessagesService } from 'src/app/messages.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  msg: Msg = new Msg;

  constructor( private messenger: MessagesService) { }

  ngOnInit(): void {
    this.msg.tel=0;
  }


  debug( form ): void {
    console.log(form);
  }

  processForm(msg: Msg){
    console.log(msg);
    this.messenger.addMsg( msg ).subscribe((msg: Msg) => { })
  }

}
