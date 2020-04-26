import { Component, OnInit } from '@angular/core';
import { CloseReglageService } from '../close-reglage.service';
import { Subject, Subscription } from 'rxjs';
import { ReglageService } from 'src/services/reglage.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
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


