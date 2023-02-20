import {Injectable} from '@angular/core';
import {Post} from "../models/Post";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) {
  }

  getPost() {
    return this.http.get<Post[]>(`https://jsonplaceholder.typicode.com/post`)
  }

  deletePost(post: Post) {
    return this.http.delete(`https://jsonplaceholder.typicode.com/post/${post.id}`);
  }
}
