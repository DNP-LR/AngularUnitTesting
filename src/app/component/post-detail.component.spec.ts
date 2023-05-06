import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PostDetailComponent} from './post-detail.component';
import {PostService} from "../service/post.service";
import {ActivatedRoute} from "@angular/router";

describe('PostDetailComponent', () => {
  let component: PostDetailComponent;
  let fixture: ComponentFixture<PostDetailComponent>;

  beforeEach(async () => {
    let mockPostService = jasmine.createSpyObj(['getPost', 'updatePost']);
    let mockLocation = jasmine.createSpyObj(['back']);
    let mockActivateRoute = {
      snapshot: {
        paramMap: {
          get: () => {
            return '3'
          }
        }
      }
    };

    await TestBed.configureTestingModule({
      declarations: [PostDetailComponent],
      providers: [
        {provide: Location, useValue: mockLocation},
        {provide: PostService, useValue: mockPostService},
        {provide: ActivatedRoute, useValue: mockActivateRoute}

      ]
    })
      .compileComponents();



    fixture = TestBed.createComponent(PostDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
