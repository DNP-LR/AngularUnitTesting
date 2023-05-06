import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PostsComponent} from './posts.component';
import {PostComponent} from "./post.component";
import {Post} from "../models/Post";
import {of} from "rxjs";
import {PostService} from "../service/post.service";

describe('PostsComponent', () => {
  let component: PostsComponent;
  let fixture: ComponentFixture<PostComponent>;
  let mockPostService: any;
  let POSTS: Post[];
  beforeEach(async () => {
    // mockPostService.de
    POSTS = [
      {
        id: 1,
        body: 'body 1',
        title: 'title 1',
      }, {
        id: 2,
        body: 'body 2',
        title: 'title 2',
      }, {
        id: 3,
        body: 'body 3',
        title: 'title 3',
      },
    ];
    mockPostService = jasmine.createSpyObj(['getPost', 'deletePost']);
    component = new PostsComponent(mockPostService);

    await TestBed.configureTestingModule({
      declarations: [],
      providers: [
        PostsComponent, {
          provide: PostService,
          useValue: mockPostService,
        }
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PostComponent);
    fixture.detectChanges();
    // component = TestBed.inject(PostComponent);

  });

  describe('delete', () => {
    beforeEach(() => {
      mockPostService.deletePost.and.returnValue(of(true));
      component.post = POSTS;
    });

    it('should delete the selected Post from the post', () => {
      component.delete(POSTS[1]);
      expect(component.post.length).toBe(2);
    });

    it('should delete the actual selected Post in Post', () => {
      component.delete(POSTS[1]);
      for (let post of component.post) {
        expect(post).not.toEqual(POSTS[1]);
      }
    });

    it('should call the delete Post from the post only once', () => {
      component.delete(POSTS[1]);
      expect(mockPostService.delete).toHaveBeenCalledTimes(1);
    });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
