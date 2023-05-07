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
  posts: Post [] = []

  constructor(private postService: PostService) {
  }


  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.postService.getPosts()
      .subscribe((posts) => {
        this.posts = posts;
      });
  }

  delete(post: Post) {
    this.posts = this.posts.filter((p) => p.id !== p.id);
    this.postService.deletePost(post)
      .subscribe();
  }
}
