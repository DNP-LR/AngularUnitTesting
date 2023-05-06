import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PostComponent } from './component/post.component';
import {StrengthPipe} from "./pipe/strength.pipe";
import {HttpClientModule} from "@angular/common/http";
import { PostsComponent } from './component/posts.component';
import {RouterModule} from "@angular/router";
import { PostDetailComponent } from './component/post-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    StrengthPipe,
    PostComponent,
    PostsComponent,
    PostDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
