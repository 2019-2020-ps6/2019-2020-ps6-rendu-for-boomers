import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import * as $ from 'jquery';

@Injectable({
  providedIn: 'root'
})
export class ReglageService {
  public heightReglage: Subject<number> = new Subject();
  public fontsize: BehaviorSubject<number> = new BehaviorSubject(45);
  public font: BehaviorSubject<string> = new BehaviorSubject("Arial");
  //public brightness: BehaviorSubject<number> = new BehaviorSubject(45);
  public valueContrast: BehaviorSubject<number> = new BehaviorSubject(1);

  constructor() {
  }

  setFontSize(value: number){
    this.fontsize.next(value);
  }

  setFont(value: string){
    this.font.next(value);
  }

 // setBrightness(value: number){
 //   this.brightness.next(value);
 // }

  updateContrast(value: number): void {
    this.valueContrast.next(value);
    if(value == 1){
      $(":root").css("--main-color", "black");
      $(":root").css("--main-bg-color", "white");
      $(":root").css("--main-panel-color", "lightgray");
      $(":root").css("--main-panel-color-light", "white");
      $(":root").css("--alt-panel-color", "#e0e0e0");
      $(":root").css("--main-shadow-color", "lightgray");
    }
    if(value == 2){
      $(":root").css("--main-color", "#FEDB01");
      $(":root").css("--main-bg-color", "#1A1A1A");
      $(":root").css("--main-panel-color", "#333333");
      $(":root").css("--main-panel-color-light", "#404040");
      $(":root").css("--alt-panel-color", "#262626");
      $(":root").css("--main-shadow-color", "#0D0D0D");
    }
    if(value == 3){
      $(":root").css("--main-color", "white");
      $(":root").css("--main-bg-color", "#3b5998");
      $(":root").css("--main-panel-color", "#4c70ba");
      $(":root").css("--main-panel-color-light", "#5f7ec1");
      $(":root").css("--alt-panel-color", "#4264aa");

      $(":root").css("--main-shadow-color", "#2d4373");
    }
  }
}
