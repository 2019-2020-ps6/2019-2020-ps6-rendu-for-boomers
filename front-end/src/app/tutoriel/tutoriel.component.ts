import { Component, OnInit } from '@angular/core';
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
  
  constructor(public reglageService: ReglageService) { }

  ngOnInit(): void {
    this.buttonObserver = this.reglageService.closeReglage$.subscribe(() => {
      this.buttonIsActivated = false;
    });
    this.reglageService.update();

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
}