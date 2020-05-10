import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../services/messages.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  items: Comment[];
  constructor(private service: MessagesService) { }

  ngOnInit(): void {
    this.service.fetchComments().subscribe((items : Comment[]) => {
      this.items = items;
    });
  }
}
