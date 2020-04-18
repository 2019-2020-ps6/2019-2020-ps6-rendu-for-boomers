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
  public validAnswerCount: number = 0;
  public invalidAnswerCount: number = 0;
  public marksArray: Array<any> = ["SS", "S", "A", "B", "C", "D"];
  public mark: string;

  public displayResultPanel: boolean = false;
  public displayFinalResultPanel: boolean = false;

  public doughnutChartLabels = ['bonne réponse', 'mauvaise réponse'];
  public doughnutChartData: Array<any>;
  public doughnutChartType = 'doughnut';
  public doughnutChartColor = 
  [
    { backgroundColor: ['#008000', '#ff0000'], borderColor: ['#808080', '#808080'] }
  ];

  public doughnutChartLegend = false;

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
      this.validAnswerCount++;
      this.answerString = this.validAnswer;
      this.displayResultPanel = true;
    }
    else
    {
      this.answerIsValid = false;
      this.invalidAnswerCount++;
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
      this.doughnutChartData = [this.validAnswerCount, this.invalidAnswerCount];
      this.calculateMark();
      this.displayFinalResultPanel = true;
      //this.router.navigate(['/menu']);
    }
    else
    {
      this.question = this.quiz.questions[1];
    }
  }

  calculateMark(): void
  {
    var res = this.validAnswerCount/this.quiz.questions.length;
    if(res == 1)
      this.mark = this.marksArray[0];
    else if(res >= 90)
      this.mark = this.marksArray[1];
    else if(res >= 80)
      this.mark = this.marksArray[2];
    else if(res >= 70)
      this.mark = this.marksArray[3];
    else if(res >= 60)
      this.mark = this.marksArray[4];
    else
      this.mark = this.marksArray[5];
  }
}
