import { Component, OnInit} from '@angular/core';
import { Msg } from 'src/app/models/msg';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  msg: Msg = new Msg();
  submitted: boolean = false;

  constructor( private messenger: MessagesService) {
   }

  ngOnInit(): void {
  }


  processForm(msg: Msg){
    console.log(msg);
    document.getElementById('posted').classList.add('visible');
    this.messenger.addMsg( msg ).subscribe((msg: Msg) => { })
    this.submitted = true;
  }

}
