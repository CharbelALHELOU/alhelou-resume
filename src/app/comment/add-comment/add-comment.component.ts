import { Component, OnInit } from '@angular/core';
import { Comment } from 'src/app/models/comment';
import { InfoService } from 'src/app/services/info.service';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent implements OnInit {

  items: Comment[];
  constructor(private service: InfoService) { }

  ngOnInit(): void {
    
  }

}
