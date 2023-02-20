import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  message : string [] = [];

  constructor() {
    debugger;
  }
  log(message : string){

    this.message.push(message);
  }
}
