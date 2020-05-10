import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Msg } from '../models/msg';
import { Comment } from '../models/comment';


@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor(private http: HttpClient) { }

  addMsg(msg : Msg): Observable<any> {
    console.log('Submited', msg);
    return  this.http.post('http://localhost:3000/messages', msg);
  }

  addComment(comment: Comment){
    console.log('Submited', comment);
    return  this.http.post('http://localhost:3000/comments', comment);
  }

  fetchComments(): Observable<any> {
    return this.http.get('http://localhost:3000/comments');
  }

}
