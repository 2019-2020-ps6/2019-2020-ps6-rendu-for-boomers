import { Component, OnInit } from '@angular/core';
import { CloseReglageService } from '../close-reglage.service';
import { ReglageService } from 'src/services/reglage.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tutoriel',
  templateUrl: './tutoriel.component.html',
  styleUrls: ['./tutoriel.component.scss']
})
export class TutorielComponent implements OnInit {
  buttonIsActivated: boolean = false;
  buttonObserver: Subscription;
  public valueContrast: number;
  public height: number;
  displayBigImage: boolean = false;
  idImage: number;
  public pageTitle: string = "Tutoriel";
  
  constructor(private closeReglageService: CloseReglageService, public reglageService: ReglageService) { }

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

  setBiggerImage(value, id): void {
    this.displayBigImage = value;
    this.idImage = id;
  }

  goToMenu(): void
    {
        this.router.navigate(['/menu']);
    }
}