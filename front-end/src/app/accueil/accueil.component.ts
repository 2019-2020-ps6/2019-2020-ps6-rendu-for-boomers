import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Subscription } from 'rxjs';
import { CloseReglageService } from '../close-reglage.service';
import { ReglageService } from 'src/services/reglage.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {
  buttonIsActivated: boolean = false;
  buttonObserver: Subscription;
  public valueContrast: number;
  
  constructor(private closeReglageService: CloseReglageService, public reglageService: ReglageService) {
   
   }

  ngOnInit(): void {
    this.buttonObserver = this.closeReglageService.closeReglage$.subscribe(() => {
      this.buttonIsActivated = false;
    });
    this.closeReglageService.update();

    this.reglageService.valueContrast.subscribe((value: number) => 
    {
      this.valueContrast = value;
    })
    this.reglageService.updateContrast(this.valueContrast);
  }

  updateFontSize(value: number): void {
    console.log("new font-size :" + value);
    $("body").css("font-size", value + "px");
  }

  goToReglageOrQuit(): void {
    if ( this.buttonIsActivated == false ) this.buttonIsActivated = true;
    else this.buttonIsActivated = false;
  }
}
