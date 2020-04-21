import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from '../../../services/quiz.service';
import { Quiz } from 'src/models/quiz.model';
import { Question } from 'src/models/question.model';
import { CloseReglageService } from '../../close-reglage.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-quiz-list',
    templateUrl: './quiz-list.component.html',
    styleUrls: ['./quiz-list.component.scss']
})
export class QuizzListComponent implements OnInit
{
    public quizList: Quiz[];
    public quiz: Quiz;

    public pageTitle: string = "LE GIGA TITRE";

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
}