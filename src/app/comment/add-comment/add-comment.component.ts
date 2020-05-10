import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Comment } from 'src/app/models/comment';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent implements OnInit {

  comment: Comment = new Comment();
  submitted: boolean=false;
  @Output() update: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private service: MessagesService) {
  }

  ngOnInit(): void {
    
  }

  processForm(comment : Comment){
    this.service.addComment( comment ).subscribe((comment: Comment) => {
      this.update.emit(true);
     })
    document.getElementById('posted').classList.add('visible');
    this.submitted = true;
  }

}
