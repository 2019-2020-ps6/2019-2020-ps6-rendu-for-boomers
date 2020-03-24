import { Injectable, EventEmitter } from '@angular/core';    
import { Subscription } from 'rxjs/internal/Subscription';    
import { buttonIsActivated } from './menu/menu.component';
import { AccueilComponent } from './accueil/accueil.component';

@Injectable({    
  providedIn: 'root'    
})    
export class EventEmitterService {    
    
  invokeSetButtonIsActivated = new EventEmitter();    
  subsVar: Subscription;    
    
  constructor() { }    
    
  setButtonIsActivated(bool: boolean) {    
    this.invokeSetButtonIsActivated.emit();    
  }    
}  