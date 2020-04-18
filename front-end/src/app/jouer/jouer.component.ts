import { Component, OnInit } from '@angular/core';
import { ReglageService } from 'src/services/reglage.service';
import { Subscription } from 'rxjs';
import { CloseReglageService } from '../close-reglage.service';

@Component({
  selector: 'app-jouer',
  templateUrl: './jouer.component.html',
  styleUrls: ['./jouer.component.scss']
})
export class JouerComponent implements OnInit {
  public valueContrast: number;
  buttonIsActivated: boolean = false;
  buttonObserver: Subscription;

  constructor(public reglageService: ReglageService, private closeReglageService: CloseReglageService) { 
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
