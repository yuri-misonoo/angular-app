import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
  title!:string;
  message!:string;
  input!:string;

  constructor() {}

  ngOnInit() {
    this.title = 'Hello-app';
    this.input = '';
    this.message = 'please type...';
  }

  doType(val:string) {
    this.input = val;
    this.message = 'you type: ' + this.input;
  }
}
