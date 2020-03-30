import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { CloseReglageService } from '../close-reglage.service';
import { ReglageService } from 'src/services/reglage.service';

@Component({
  selector: 'app-reglage',
  templateUrl: './reglage.component.html',
  styleUrls: ['./reglage.component.scss']
})

export class ReglageComponent implements OnInit {

  constructor(private closeReglageService: CloseReglageService, public reglageService: ReglageService) {

  }

  ngOnInit(): void {
  }

  onCloseReglage(): void {
    console.log("click");
    this.closeReglageService.setCloseReglage(true);
  }

  updateFontSize(value: number): void {
    this.reglageService.defaultValue = value;
    console.log("new font-size :" + value);
    $("body").css("font-size", value + "px");
  }
}
