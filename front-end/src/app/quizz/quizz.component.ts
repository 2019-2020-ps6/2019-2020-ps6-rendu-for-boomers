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
      alert("c'est la bonne reponse bravo !");
    }
    else
    {
      alert("vous etes nul ! honte a vous !")
    }

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

  goToReglageOrQuit(): void {
    if ( this.buttonIsActivated == false ) this.buttonIsActivated = true;
    else this.buttonIsActivated = false;
  }
}
