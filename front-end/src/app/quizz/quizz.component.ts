import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from '../../services/quiz.service';
import { Quiz } from 'src/models/quiz.model';
import { Question } from 'src/models/question.model';
import { CloseReglageService } from '../close-reglage.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.scss']
})
export class QuizzComponent implements OnInit 
{
  buttonIsActivated: boolean = false;
  buttonObserver: Subscription;
  public quiz: Quiz;
  public question: Question;
  public questionIndex: number;
  public answerString: string;
  public validAnswer: string = "Bravo ! c'est la bonne réponse !";
  public invalidAnswer: string = "Non non non ! c'est pas bon !";
  public answerIsValid: boolean = false;
  public displayResultPanel: boolean = false;

  constructor(private router: Router, public quizService: QuizService, private closeReglageService: CloseReglageService) 
  { 
    this.quizService.quizzes$.subscribe((quizzes: Quiz[]) => 
    {
      this.quiz = quizzes[0];
      this.question = this.quiz.questions[0];
    })

    this.questionIndex = 1;
  }

  ngOnInit(): void {
    this.buttonObserver = this.closeReglageService.closeReglage$.subscribe(() => {
      this.buttonIsActivated = false;
    });
    this.closeReglageService.update();
  }

  selectAnswer(answerIndex:number)
  {
    if(this.question.answers[answerIndex].isCorrect)
    {
      this.answerIsValid = true;
      this.answerString = this.validAnswer;
      this.displayResultPanel = true;
    }
    else
    {
      this.answerIsValid = false;
      this.answerString = this.invalidAnswer;
      this.displayResultPanel = true;
    }

    
  }

  goToReglageOrQuit(): void {
    if ( this.buttonIsActivated == false ) this.buttonIsActivated = true;
    else this.buttonIsActivated = false;
  }

  goToNextQuestion(): void
  {
    this.displayResultPanel = false;
    this.questionIndex++;
    if(this.questionIndex > this.quiz.questions.length)
    {
      alert("bravo le quiz est fini");
      this.router.navigate(['/menu']);
    }
    else
    {
      this.question = this.quiz.questions[1];
    }
  }
}
