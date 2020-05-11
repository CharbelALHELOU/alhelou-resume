import { OnInit, Component } from '@angular/core';
import { MessagesService } from '../services/messages.service';
import { Comment } from '../models/comment';
import { ICommentLangSet, ILangSet } from '../constants';
import { LangService } from '../services/lang.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  c: Comment = new Comment();
  items: Comment[];
  translation:ICommentLangSet= null;

  constructor(private service: MessagesService,
    private lang:LangService) { }

  ngOnInit(): void {
    this.getComments();
    this.lang.translation$.subscribe((t:ILangSet) => {
      this.translation= t.comment})
  }

  getComments(){
    this.service.fetchComments().subscribe((items : Comment[]) => {
      this.items = items.reverse();
    });
  }
}
