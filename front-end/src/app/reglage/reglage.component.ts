import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { CloseReglageService } from '../close-reglage.service';
import { ReglageService } from 'src/services/reglage.service';
import { BehaviorSubject, Subject } from 'rxjs';

@Component({
  selector: 'app-reglage',
  templateUrl: './reglage.component.html',
  styleUrls: ['./reglage.component.scss']
})

export class ReglageComponent implements OnInit {

  public value:number;

  constructor(private closeReglageService: CloseReglageService, public reglageService: ReglageService) {
      this.reglageService.fontsize.subscribe((fontsize: number) => 
      {
        this.value = fontsize;
      })
  }

  ngOnInit(): void {
  }

  onCloseReglage(): void {
    console.log("click");
    this.closeReglageService.setCloseReglage(true);
  }

  updateFontSize(value: number): void {
    this.reglageService.setFontSize(value);
    console.log("new font-size :" + value);
    $("body").css("font-size", value + "px");
  }
}
