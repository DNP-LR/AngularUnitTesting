import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PostComponent} from './post.component';
import {Post} from "../models/Post";
import {of} from "rxjs";

describe('PostComponent', () => {
  let component: PostComponent;
  let fixture: ComponentFixture<PostComponent>;
  let mockPostService : any;
  let postVariable: Post[];
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    // postVariable = [
    //   {
    //     id: 1,
    //     body: 'test 1',
    //     title: 'title 1'
    //   }, {
    //     id: 2,
    //     body: 'test 2',
    //     title: 'title 2'
    //   }, {
    //     id: 3,
    //     body: 'test 3',
    //     title: 'title 3'
    //   },
    // ];
    // mockPostService = jasmine.createSpyObj(['getPost', 'deletePost']);
    // component = new PostComponent(mockPostService);
  });

  // describe('delete',  ()=> {
  //   beforeEach(() =>{
  //     mockPostService.deletePost.and.returnValue(of(true));
  //     component.post = postVariable;
  //   });
  //
  //   it('should delete the selected Post from the post', () => {
  //     component.delete(postVariable[1]);
  //     expect(component.post.length).toBe(2);
  //   });
  //
  //   it('should delete the actual selected Post in Post', () => {
  //     component.delete(postVariable[1]);
  //     for(let post of component.post){
  //       expect(post).not.toEqual(postVariable[1]);
  //     }
  //   });
  //
  //   it('should call the delete Post from the post only once', () => {
  //     component.delete(postVariable[1]);
  //     expect(mockPostService.delete).toHaveBeenCalledTimes(1);
  //   });
  // });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
