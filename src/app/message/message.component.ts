import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  /*private */ _content!:string[];

  constructor() { }

  ngOnInit() { }

  @Input()
  set content(msgs:string) {
    this._content = msgs.split(',');
  }

  get content() {
    return this._content.join(',')
  }

  doClick() {
    this._content.pop();
  }

}
