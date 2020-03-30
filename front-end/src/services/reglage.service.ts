import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReglageService {

  public fontsize: BehaviorSubject<number> = new BehaviorSubject(45);
  
  constructor() {
  }

  setFontSize(value: number){
    this.fontsize.next(value);
  }
}
