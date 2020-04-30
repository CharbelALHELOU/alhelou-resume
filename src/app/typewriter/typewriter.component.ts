import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-typewriter',
  templateUrl: './typewriter.component.html',
  styleUrls: ['./typewriter.component.css']
})
export class TypewriterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
      this.typingCallback(this);
  }

  @Input() message: string;
  typewriter_display: string = "";

  typingCallback(that) {
    let total_length = that.message.length;
    let current_length = that.typewriter_display.length;
    if (current_length < total_length) {
      that.typewriter_display += that.message[current_length];
    } else {  }
    setTimeout(that.typingCallback, 100, that);
  }
}
