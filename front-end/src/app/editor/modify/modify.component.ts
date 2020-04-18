import { Component, OnInit } from '@angular/core';
import { CloseReglageService } from '../../close-reglage.service';
import { Subject, Subscription } from 'rxjs';
import { ReglageService } from 'src/services/reglage.service';
import * as $ from 'jquery';


@Component({
  selector: 'app-editor',
  templateUrl: './modify.component.html',
  styleUrls: ['./modify.component.scss']
})
export class ModifyComponent implements OnInit {
  buttonIsActivated: boolean = false;
  buttonObserver: Subscription;
  public valueContrast: number;
  public height: number;

  constructor(private closeReglageService: CloseReglageService, public reglageService: ReglageService) { 
   
  }

  ngOnInit(): void {
    this.buttonObserver = this.closeReglageService.closeReglage$.subscribe(() => {
      this.buttonIsActivated = false;
    });
    this.closeReglageService.update();

    this.reglageService.valueContrast.subscribe((value: number) => 
    {
      this.valueContrast = value;
    })
    this.reglageService.updateContrast(this.valueContrast);
  }

  goToReglageOrQuit(): void {
    if ( this.buttonIsActivated == false ) this.buttonIsActivated = true;
    else this.buttonIsActivated = false;
  }
}