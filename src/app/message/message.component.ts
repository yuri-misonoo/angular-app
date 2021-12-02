import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MycheckService } from '../mycheck.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css'],
  providers: [MycheckService],
})
export class MessageComponent implements OnInit {
  content!:string[];

  constructor(private service:MycheckService, private route: ActivatedRoute) {
    service.push('message data');
  }

  ngOnInit() {
    this.service.push('params: ' +
      JSON.stringify(this.route.snapshot.paramMap));
    this.content = this.service.list;
  }
}
