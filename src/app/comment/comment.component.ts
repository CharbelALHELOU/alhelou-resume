import { OnInit, Component } from '@angular/core';
import { MessagesService } from '../services/messages.service';
import { Comment } from '../models/comment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  c: Comment = new Comment();
  items: Comment[];
  constructor(private service: MessagesService) { }

  ngOnInit(): void {
    this.getComments();
  }

  getComments(){
    this.service.fetchComments().subscribe((items : Comment[]) => {
      this.items = items.reverse();
    });
  }
}
