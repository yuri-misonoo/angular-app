import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { MessageComponent } from './message/message.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [HelloComponent]
})
export class AppModule { }
