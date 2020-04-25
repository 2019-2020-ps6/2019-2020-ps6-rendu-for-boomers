import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CloseReglageService } from '../../close-reglage.service';
import { Subject, Subscription } from 'rxjs';
import { ReglageService } from 'src/services/reglage.service';
import { QuizService } from '../../../services/quiz.service';
import { Quiz } from 'src/models/quiz.model';
import { Question } from 'src/models/question.model';
import * as $ from 'jquery';


@Component({
  selector: 'app-editor',
  templateUrl: './modify.component.html',
  styleUrls: ['./modify.component.scss']
})


export class ModifyComponent implements OnInit {
  public quizList: Quiz[];
  public quiz: Quiz;

  public pageTitle: string = "Modifier un quiz";
  public valueContrast: number;
  public height: number;

  buttonIsActivated: boolean = false;
  buttonObserver: Subscription;


  constructor(private router: Router, public quizService: QuizService, private closeReglageService: CloseReglageService)
  {
      this.quizService.quizzes$.subscribe((quizzes: Quiz[]) =>
      {
          this.quizList = quizzes;
          this.quiz = quizzes[0];
      })
  }

  ngOnInit(): void {
      this.buttonObserver = this.closeReglageService.closeReglage$.subscribe(() => {
          this.buttonIsActivated = false;
        });
        this.closeReglageService.update();
  }

  quizSelected(selected: boolean)
  {
      console.log('event received from child ', selected);  
  }

  editQuiz(quiz: Quiz)
  {
      this.router.navigate(['/quizz/'+ quiz.name]);
  }




  goToReglageOrQuit(): void {
    if ( this.buttonIsActivated == false ) this.buttonIsActivated = true;
    else this.buttonIsActivated = false;
  }
}