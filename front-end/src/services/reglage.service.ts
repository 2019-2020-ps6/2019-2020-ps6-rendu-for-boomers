import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import * as $ from 'jquery';

@Injectable({
  providedIn: 'root'
})
export class ReglageService {
  public heightReglage: Subject<number> = new Subject();
  public fontsize: BehaviorSubject<number> = new BehaviorSubject(45);
  public valueContrast: BehaviorSubject<number> = new BehaviorSubject(1);

  constructor() {
  }

  setFontSize(value: number){
    this.fontsize.next(value);
  }

  updateHeightReglage(value: number){
    this.heightReglage.next(value);
  }

  updateContrast(value: number): void {
    this.valueContrast.next(value);
    if(value == 1){
      $("a").css("color", "black");
      $(".contrast").css("color", "black");
      $(".contrast").css("background-color", "white");
      $(".button").css("color", "black");
      $(".button").css("background-color", "white");
    }
    if(value == 2){
      $("a").css("color", "yellow");
      $(".contrast").css("color", "yellow");
      $(".contrast").css("background-color", "black");
      $(".button").css("color", "yellow");
      $(".button").css("background-color", "black");
    }
    if(value == 3){
      $("a").css("color", "white");
      $(".contrast").css("color", "white");
      $(".contrast").css("background-color", "blue");
      $(".button").css("color", "white");
      $(".button").css("background-color", "blue");
    }
  }
}
