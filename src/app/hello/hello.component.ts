import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MycheckService } from '../mycheck.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css'],
  providers: [MycheckService],
})
export class HelloComponent implements OnInit {
  title!:string;
  message!:string;

  constructor() { }

  ngOnInit() {
    this.title = 'Hello-app';
    this.message = 'sample message';
  }
}
