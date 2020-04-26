import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from '../../../services/quiz.service';
import { Quiz } from 'src/models/quiz.model';
import { CloseReglageService } from '../../close-reglage.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-quiz-list',
    templateUrl: './quiz-list.component.html',
    styleUrls: ['./quiz-list.component.scss']
})
export class QuizzListComponent implements OnInit
{

    @Input()
    deletable: boolean;

    @Output()
    quizSelected: EventEmitter<Quiz> = new EventEmitter<Quiz>();

    public quizList: Quiz[];

    quizToDelete: Quiz;


    constructor(private router: Router, public quizService: QuizService)
    {
        this.quizService.quizzes$.subscribe((quizzes: Quiz[]) =>
        {
            this.quizList = quizzes;
        })
    }

    ngOnInit(): void {}

    quizSelectedHandle(quiz: Quiz)
    {
        this.quizSelected.emit(quiz);   
    }

    playQuiz(quiz: Quiz)
    {
        this.router.navigate(['/quizz/'+ quiz.name]);
    }

    deleteQuiz(quiz: Quiz)
    {
        this.quizToDelete = quiz;
    }

    deleteQuizPourDeBon()
    {
        this.quizService.deleteQuiz(this.quizToDelete);
        this.quizToDelete = null;
    }

    nePasDeleteQuiz()
    {
        this.quizToDelete = null;
    }
}