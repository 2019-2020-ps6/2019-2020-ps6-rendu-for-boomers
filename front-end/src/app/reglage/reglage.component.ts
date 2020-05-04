import { Component, OnInit } from '@angular/core';
import { ReglageService } from 'src/services/reglage.service';

@Component({
  selector: 'app-reglage',
  templateUrl: './reglage.component.html',
  styleUrls: ['./reglage.component.scss']
})

export class ReglageComponent implements OnInit {
  public height: number;
  public fontValue:number;
  public font:string;
  //public brightness:number;
  public valueContrast: number;

  constructor(public reglageService: ReglageService) {
      this.reglageService.fontsize.subscribe((fontsize: number) => 
      {
        this.fontValue = fontsize;
      })
      this.reglageService.valueContrast.subscribe((value: number) => 
      {
        this.valueContrast = value;
      })
      this.reglageService.font.subscribe((value: string) => 
      {
        this.font = value;
      })
    //this.reglageService.brightness.subscribe((value: number) => 
    //{
    //  this.brightness = value;
    //})
  }

  ngOnInit(): void {
    this.updateContrast(this.valueContrast);
    //this.updateBrightness(this.brightness);
  }

  onCloseReglage(): void {
    console.log("click");
    this.reglageService.setCloseReglage(true);
  }

  updateFontSize(value: number): void {
    this.reglageService.setFontSize(value);
    document.documentElement.style.setProperty("--main-font-size", value + "px");
  }

  updateFont(value: string): void {
    this.reglageService.setFont(value);
    document.documentElement.style.setProperty("--main-font", value);
  }

  //updateBrightness(value: number): void {
  //  this.reglageService.setBrightness(value);
  //  $(":root").css("--main-filter:", value + "%;");
  //}

  updateContrast(value: number): void {
    this.reglageService.updateContrast(value);
  }
}
