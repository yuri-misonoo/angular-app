import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
  title!:string;
  message!:string;
  visible!:boolean;

  constructor() {}

  ngOnInit() {
    this.title = 'Hello-app';
    this.visible = true;
    this.message = 'please type...';
  }

  doClick() {
    this.visible = !this.visible;
  }
}
