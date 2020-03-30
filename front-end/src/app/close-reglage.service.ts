import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CloseReglageService {
  closeReglage: boolean = true;
  closeReglage$: Subject<boolean> = new Subject();
  
  constructor() { 
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
