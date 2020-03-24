import { Component, OnInit } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { AccueilComponent } from '../accueil/accueil.component';
import * as $ from 'jquery';

@Component({
  selector: 'app-reglage',
  templateUrl: './reglage.component.html',
  styleUrls: ['./reglage.component.scss']
})

export class ReglageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  goBack(): void {

    
  }

  updateFontSize(value: number): void {
    console.log("new font-size :" + value);
    $(".text").css("font-size", value + "px");
  }
}
