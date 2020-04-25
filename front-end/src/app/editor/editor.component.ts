import { Component, OnInit } from '@angular/core';
import { CloseReglageService } from '../close-reglage.service';
import { Subject, Subscription } from 'rxjs';
import { ReglageService } from 'src/services/reglage.service';
import * as $ from 'jquery';


@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})

export class EditorComponent implements OnInit {
  buttonIsActivated: boolean = false;
  buttonObserver: Subscription;
  public valueContrast: number;
  public height: number;
  public pageTitle: string = "Éditeur de quiz";

  public creatingQuiz: boolean = false;

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

  startQuizCreation(): void
  {
    this.creatingQuiz = true;
  }

  quizCreated(selected: boolean)
  {
    this.creatingQuiz = false;
  }

  goToReglageOrQuit(): void {
    if ( this.buttonIsActivated == false ) this.buttonIsActivated = true;
    else this.buttonIsActivated = false;
  }
}