import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  buttonIsActivated: boolean = false;

  constructor() { }

  ngOnInit(): void {
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


