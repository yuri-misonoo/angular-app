import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
  title!:string;
  message!:string;
  nowStyle:any;

  constructor() {}

  ngOnInit() {
    this.title = 'Hello-app';
    this.message = 'false false false';
    this.nowStyle = {
      'border-style':'',
      'border-width':'',
      'border-color':''
    };
  }

  check(in1:any, in2:any, in3:any) {
    this.nowStyle['border-style'] = in1;
    this.nowStyle['border-width'] = in2 + "px";
    this.nowStyle['border-color'] = in3;
    this.message = JSON.stringify(this.nowStyle);
  }
}
