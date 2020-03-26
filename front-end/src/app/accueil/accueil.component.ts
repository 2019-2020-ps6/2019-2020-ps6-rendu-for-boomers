import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Subscription } from 'rxjs';
import { CloseReglageService } from '../close-reglage.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {
  buttonIsActivated: boolean = false;
  buttonObserver: Subscription;
  
  constructor(private closeReglageService: CloseReglageService) { }

  ngOnInit(): void {
    this.buttonObserver = this.closeReglageService.closeReglage$.subscribe(() => {
      this.buttonIsActivated = false;
    });
    this.closeReglageService.update();
  }

  updateFontSize(value: number): void {
    console.log("new font-size :" + value);
    $(".text").css("font-size", value + "px");
  }

  goToReglageOrQuit(): void {
    if ( this.buttonIsActivated == false ) this.buttonIsActivated = true;
    else this.buttonIsActivated = false;
  }
}
