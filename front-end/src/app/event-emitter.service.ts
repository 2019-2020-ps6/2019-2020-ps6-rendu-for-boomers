import { Injectable, EventEmitter } from '@angular/core';    
import { Subscription } from 'rxjs/internal/Subscription';    
import { MenuComponent } from './menu/menu.component';
import { AccueilComponent } from './accueil/accueil.component';

@Injectable({    
  providedIn: 'root'    
})    
export class EventEmitterService {    
    
  buttonIsActivated: boolean;
    
  constructor() { }    
    

}  