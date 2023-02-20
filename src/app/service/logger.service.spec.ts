import { TestBed } from '@angular/core/testing';

import { LoggerService } from './logger.service';

describe('LoggerService', () => {
  let service: LoggerService;
  let loggerService : LoggerService
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoggerService);
    loggerService = new LoggerService();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should not have any message at starting', () =>{
    //act
    let count = service.message.length;
    expect(count).toBe(0);
  });

  it('should add th message when log is called', () =>{
    service.log('message');
    expect(service.message.length).toBe(1);
  });

  it('should clear all the messages when clear is called', () =>{
    console.log('message');
    service.clear();
    expect(service.message.length).toBe(0);
  })
});
