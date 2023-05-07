import {TestBed} from '@angular/core/testing';

import {PostService} from './post.service';
import {HttpClient} from "@angular/common/http";
import {of} from "rxjs";
import {HttpTestingController} from "@angular/common/http/testing";

describe('PostService', () => {
  let service: PostService;
  let postService: PostService;
  let httpTestingController : HttpTestingController;
  let httpClientSpy: jasmine.SpyObj<HttpClient>

  let postVariable = [
    {
      id: 1,
      body: 'test 1',
      title: 'title 1'
    }, {
      id: 2,
      body: 'test 2',
      title: 'title 2'
    }, {
      id: 3,
      body: 'test 3',
      title: 'title 3'
    },
  ];

  beforeEach(() => {
    let httpClientSpyObj = jasmine.createSpyObj('HttpClient', ['get']);
    TestBed.configureTestingModule({
      providers: [
        PostService, {
          provide: HttpClient,
          useValue: httpClientSpyObj
        }],
    });
    service = TestBed.inject(PostService);
    httpClientSpy= TestBed.inject(HttpClient) as jasmine.SpyObj<HttpClient>;
  });

  describe('getPost()', () => {
    it('should return expected post when getPost is called', (done: DoneFn) => {
      httpClientSpy.get.and.returnValue(of(postVariable));
      service.getPosts().subscribe({
        next: (post) => {
          expect(post).toEqual(postVariable);
          done();
        },
        error: () => {
          done.fail;
        },
      });
      expect(httpClientSpy.get).toHaveBeenCalledTimes(1);
    });
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
