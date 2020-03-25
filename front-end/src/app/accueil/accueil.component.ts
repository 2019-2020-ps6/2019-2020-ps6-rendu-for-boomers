import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {
  buttonIsActivated: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  updateFontSize(value: number): void {
    console.log("new font-size :" + value);
    $(".text").css("font-size", value + "px");
  }

  goToReglageOrQuit(): void {
    if ( this.buttonIsActivated == false ) this.buttonIsActivated = true;
    else this.buttonIsActivated = false;
  }

  getButtonIsActivated(): boolean {
    return this.buttonIsActivated;
  }

  setButtonIsActivated(boolean): void {
    this.buttonIsActivated = boolean;
  }
}
