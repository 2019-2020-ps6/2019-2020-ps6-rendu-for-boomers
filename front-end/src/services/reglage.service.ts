import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReglageService {
  public heightReglage: Subject<number> = new Subject();
  public fontsize: BehaviorSubject<number> = new BehaviorSubject(45);
  public font: BehaviorSubject<string> = new BehaviorSubject("Arial");
  //public brightness: BehaviorSubject<number> = new BehaviorSubject(45);
  public valueContrast: BehaviorSubject<number> = new BehaviorSubject(1);
  closeReglage: boolean = true;
  closeReglage$: Subject<boolean> = new Subject();

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
      document.documentElement.style.setProperty("--main-color", "#202020");
      document.documentElement.style.setProperty("--main-bg-color", "whitesmoke");
      document.documentElement.style.setProperty("--main-panel-color", "darkgray");
      document.documentElement.style.setProperty("--main-panel-color-light", "silver");
      document.documentElement.style.setProperty("--alt-panel-color", "gainsboro");
      document.documentElement.style.setProperty("--main-shadow-color", "silver");
    }
    if(value == 2){
      document.documentElement.style.setProperty("--main-color", "#FEDB01");
      document.documentElement.style.setProperty("--main-bg-color", "#1A1A1A");
      document.documentElement.style.setProperty("--main-panel-color", "#333333");
      document.documentElement.style.setProperty("--main-panel-color-light", "#404040");
      document.documentElement.style.setProperty("--alt-panel-color", "#262626");
      document.documentElement.style.setProperty("--main-shadow-color", "#0D0D0D");
    }
    if(value == 3){
      document.documentElement.style.setProperty("--main-color", "whitesmoke");
      document.documentElement.style.setProperty("--main-bg-color", "#3b5998");
      document.documentElement.style.setProperty("--main-panel-color", "#4c70ba");
      document.documentElement.style.setProperty("--main-panel-color-light", "#5f7ec1");
      document.documentElement.style.setProperty("--alt-panel-color", "#4264aa");
      document.documentElement.style.setProperty("--main-shadow-color", "#2d4373");
    }
  }

  setCloseReglage(bool: boolean){
    this.closeReglage = bool;
    this.update();
  }

  getCloseReglage(): boolean {
    return this.closeReglage;
  }

  update(){
    this.closeReglage$.next(this.closeReglage);
  }
}
