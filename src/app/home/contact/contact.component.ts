import { Component, OnInit} from '@angular/core';
import { Msg } from 'src/app/models/msg';
import { MessagesService } from 'src/app/messages.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  msg: Msg = new Msg();

  constructor( private messenger: MessagesService) { }

  ngOnInit(): void {
  }


  processForm(msg: Msg){
    console.log(msg);
    this.messenger.addMsg( msg ).subscribe((msg: Msg) => { })
  }

}
