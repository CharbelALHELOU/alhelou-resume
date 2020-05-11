import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Comment } from 'src/app/models/comment';
import { MessagesService } from 'src/app/services/messages.service';
import { LangService } from 'src/app/services/lang.service';
import { ICommentLangSet, ILangSet } from 'src/app/constants';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent implements OnInit {
  translation:ICommentLangSet=null;
  comment: Comment = new Comment();
  submitted: boolean=false;
  @Output() update: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private service: MessagesService,
    private lang:LangService) {
  }

  ngOnInit(): void {
    this.lang.translation$.subscribe((t:ILangSet) => {
      this.translation= t.comment
    })
  }

  processForm(comment : Comment){
    this.service.addComment( comment ).subscribe((comment: Comment) => {
      this.update.emit(true);
     })
    document.getElementById('posted').classList.add('visible');
    this.submitted = true;
  }

}
