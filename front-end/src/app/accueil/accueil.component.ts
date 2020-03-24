import { Component, OnInit } from '@angular/core';


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

  onUpdateFontSize(size: number){

    console.log("");
  }

  goToReglage(): void {
    this.buttonIsActivated = true;
  }

  getButtonIsActivated(): boolean {
    return this.buttonIsActivated;
  }

  setButtonIsActivated(boolean): void {
    this.buttonIsActivated = boolean;
  }
}