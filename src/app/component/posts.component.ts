import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Post} from "../models/Post";
import {PostService} from "../service/post.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  constructor(private postService: PostService) {
  }

  post: Post [] = []

  ngOnInit() {

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
