import {Component, OnInit} from '@angular/core';
import {Post} from "../models/Post";
import {PostService} from "../service/post.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  post: Post [] = []

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.getPost();
  }

  getPost() {
    this.postService.getPost()
      .subscribe((post) => {
        this.post = post;
      });
  }

  delete(post: Post) {
    this.post = this.post.filter((post) => post.id !== post.id);
    this.postService.deletePost(post)
      .subscribe();
  }
}
