import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Quiz } from '../../../models/quiz.model';
import { Router } from '@angular/router';

@Component({
    selector: 'app-quiz-card',
    templateUrl: './quiz-card.component.html',
    styleUrls: ['./quiz-card.component.scss']
})
export class QuizCardComponent implements OnInit {
    @Input()
    quiz: Quiz;

    @Output()
    quizSelected: EventEmitter<boolean> = new EventEmitter<boolean>();
    @Output()
    quizDeleted: EventEmitter<Quiz> = new EventEmitter<Quiz>();

    constructor(private router: Router) {

    }

    ngOnInit() {

    }

    selectQuiz() {
        this.quizSelected.emit(true);
        this.router.navigate(['/quizz']);
    }

    deleteQuiz() {
        this.quizDeleted.emit(this.quiz);
    }
}