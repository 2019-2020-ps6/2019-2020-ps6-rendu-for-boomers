import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from '../../services/quiz.service';
import { Quiz } from 'src/models/quiz.model';
import { Question } from 'src/models/question.model';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.scss']
})
export class QuizzComponent implements OnInit 
{

  public quiz: Quiz;
  public question: Question;

  constructor(private router: Router, public quizService: QuizService) 
  { 
    this.quizService.quizzes$.subscribe((quizzes: Quiz[]) => 
    {
      this.quiz = quizzes[0];
      this.question = this.quiz.questions[0];
    })
  }

  ngOnInit(): void {
  }

}
