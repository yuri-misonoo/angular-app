import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MycheckService } from '../mycheck.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  content!:string[];

  constructor(private service:MycheckService) {}

  ngOnInit() {
    this.content = this.service.list;
  }
}
