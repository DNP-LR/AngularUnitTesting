import {TestBed} from '@angular/core/testing';

import {CalculatorService} from './calculator.service';

describe('CalculatorService', () => {
  let service: CalculatorService;
  let mockLoggerService : any;
  beforeEach(() => {
    console.log('Calling before each')
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculatorService);
    mockLoggerService = jasmine.createSpyObj('LoggerService', ['log']);
    service = new CalculatorService(mockLoggerService);
  });

  it('should be created', () => {
      expect(service).toBeTruthy();
  });

  it('should add two numbers', () =>{
    console.log('Calling add')
    let result = service.add(2,2);
    expect(result).toBe(4);
    expect(mockLoggerService.log).toHaveBeenCalledTimes(1)
  });

  it('should subtract two numbers', () =>{
    console.log('Calling subtract')

    let result = service.subtract(2, 2);
    expect(result).toBe(0)
    expect(mockLoggerService.log).toHaveBeenCalledTimes(1)
  });
});
