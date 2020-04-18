import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import * as $ from 'jquery';

@Injectable({
  providedIn: 'root'
})
export class ReglageService {
  public heightReglage: Subject<number> = new Subject();
  public fontsize: BehaviorSubject<number> = new BehaviorSubject(45);
  public brightness: BehaviorSubject<number> = new BehaviorSubject(45);
  public valueContrast: BehaviorSubject<number> = new BehaviorSubject(1);

  constructor() {
  }

  setFontSize(value: number){
    this.fontsize.next(value);
  }

  setBrightness(value: number){
    this.brightness.next(value);
  }

  updateHeightReglage(value: number){
    this.heightReglage.next(value);
  }

  updateContrast(value: number): void {
    this.valueContrast.next(value);
    if(value == 1){
      $(":root").css("--main-color", "black");
      $(":root").css("--main-bg-color", "white");
    }
    if(value == 2){
      $(":root").css("--main-color", "#FEDB01");
      $(":root").css("--main-bg-color", "black");
    }
    if(value == 3){
      $(":root").css("--main-color", "white");
      $(":root").css("--main-bg-color", "#3b5998");
    }
  }
}
