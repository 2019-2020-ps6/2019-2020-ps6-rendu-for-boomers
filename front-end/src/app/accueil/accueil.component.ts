import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Subscription } from 'rxjs';
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
  
  constructor(public reglageService: ReglageService) {
   
   }

  ngOnInit(): void {
    this.buttonObserver = this.reglageService.closeReglage$.subscribe(() => {
      this.buttonIsActivated = false;
    });
    this.reglageService.update();

    this.reglageService.valueContrast.subscribe((value: number) => 
    {
      this.valueContrast = value;
    })
    this.reglageService.updateContrast(this.valueContrast);
  }

  updateFontSize(value: number): void {
    this.reglageService.setFontSize(value);
    $(":root").css("--main-font-size", value + "px");
  }

  goToReglageOrQuit(): void {
    if ( this.buttonIsActivated == false ) this.buttonIsActivated = true;
    else this.buttonIsActivated = false;
  }

  updateContrast(value: number): void {
    this.reglageService.updateContrast(value);
  }
}
