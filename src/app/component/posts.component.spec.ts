import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PostsComponent} from './posts.component';
import {PostComponent} from "./post.component";
import {Post} from "../models/Post";
import {of} from "rxjs";
import {PostService} from "../service/post.service";
import {By} from "@angular/platform-browser";

describe('PostsComponent', () => {
  let POSTS: Post[];
  let component: PostsComponent;
  let mockPostService: any;
  let fixture: ComponentFixture<PostsComponent>;

  beforeEach(async () => {
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
    mockPostService = jasmine.createSpyObj(['getPosts', 'deletePost']);

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

    fixture = TestBed.createComponent(PostsComponent);
    component = fixture.componentInstance;
  });

  // it('should create exact same number of Post Component with Posts', () => {
  //   mockPostService.getPosts.and.returnValue(of(POSTS));
  //   fixture.detectChanges();
  //   const postComponentDEs = fixture.debugElement.queryAll(
  //     By.directive(PostComponent)
  //   );
  //   expect(postComponentDEs.length).toEqual(POSTS.length);
  // });
  // it('should check whether exact post is sending PostComponent', function () {
  //   mockPostService.getPosts.and.returnValue(of(POSTS));
  //   fixture.detectChanges();
  //   const postComponentDEs = fixture.debugElement.queryAll(
  //     By.directive(PostComponent)
  //   );
  //   for (let i = 0; i < postComponentDEs.length; i++) {
  //     let postComponentInstance = postComponentDEs[i]
  //       .componentInstance as PostComponent;
  //     expect(postComponentInstance.post.title).toEqual(POSTS[i].title);
  //   }
  // });

  // it('should set post from the service directly', function () {
  //   mockPostService.getPosts.and.returnValue(of(POSTS));
  //   fixture.detectChanges();
  //   expect(component.posts.length).toBe(3);
  // });

  // it('should should create one post child Element for each post', function () {
  //   mockPostService.getPosts.and.returnValue(of(POSTS));
  //   fixture.detectChanges();
  //   const debugElement = fixture.debugElement;
  //   const postElement = debugElement.queryAll(By.css('.posts'));
  //   expect(postElement.length).toBe(POSTS.length);
  // });

  // describe('delete', () => {
  //   beforeEach(() => {
  //     mockPostService.deletePost.and.returnValue(of(true));
  //     component.posts = POSTS;
  //   });
  //   it('should delete the selected Post from the post', () => {
  //     component.delete(POSTS[1]);
  //     expect(component.posts.length).toBe(2);
  //   });
  //
  //   it('should delete the actual selected Post in Post', () => {
  //     component.delete(POSTS[1]);
  //     // expect(component.post.length).toBe(2);
  //     for (let post of component.posts) {
  //       expect(post).not.toEqual(POSTS[1]);
  //     }
  //   });
  //
  //   it('should call the delete Post from the post only once', () => {
  //     component.delete(POSTS[1]);
  //     expect(mockPostService.delete).toHaveBeenCalledTimes(1);
  //   });
  //   it('should call delete method when post component button is clicked', function () {
  //     spyOn(component, 'delete');
  //     mockPostService.getPosts.and.returnValue(of(POSTS));
  //     fixture.detectChanges();
  //
  //     let postComponentsDEs = fixture.debugElement.queryAll(
  //       By.directive(PostComponent)
  //     );
  //     for (let i = 0; i < postComponentsDEs.length; i++) {
  //       postComponentsDEs[i]
  //         .query(By.css('button'))
  //         .triggerEventHandler('click', {
  //           preventDefault: () => {
  //           }
  //         });
  //       expect(component.delete).toHaveBeenCalledWith(POSTS[i]);
  //     }
  //   });
  //
  //   it('should call the delete method when the delete event is emitted in Post Component', function () {
  //     spyOn(component, 'delete');
  //     mockPostService.getPosts.and.returnValue(of(POSTS));
  //     fixture.detectChanges();
  //     let postComponentDEs = fixture.debugElement.queryAll(
  //       By.directive(PostComponent));
  //
  //     for (let i = 0; i < postComponentDEs.length; i++) {
  //       (postComponentDEs[i].componentInstance as PostComponent).delete.emit(
  //         POSTS[i]
  //       );
  //       expect(component.delete).toHaveBeenCalledWith(POSTS[i]);
  //     }
  //
  //   });
  //
  // });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
