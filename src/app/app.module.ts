import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PostComponent } from './component/post.component';
import {HttpClientModule} from "@angular/common/http";
import {StrengthPipe} from "./pipe/strength.pipe";

@NgModule({
  declarations: [
    AppComponent,
    StrengthPipe,
    PostComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
