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
  public valueContrast: number;

  constructor(private closeReglageService: CloseReglageService, public reglageService: ReglageService) {
      this.reglageService.fontsize.subscribe((fontsize: number) => 
      {
        this.value = fontsize;
      })

      this.reglageService.valueContrast.subscribe((value: number) => 
      {
        this.valueContrast = value;
        this.reglageService.updateContrast(this.valueContrast);
      })
  }

  ngOnInit(): void {
    this.updateContrast(this.valueContrast);
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

  updateContrast(value: number): void {
    this.reglageService.updateContrast(value);
    console.log(value);
  }

}
