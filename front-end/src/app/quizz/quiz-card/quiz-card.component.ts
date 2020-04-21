import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Quiz } from '../../../models/quiz.model';

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

    constructor() {

    }

    ngOnInit() {

    }

    selectQuiz() {
        this.quizSelected.emit(true);
    }

    deleteQuiz() {
        this.quizDeleted.emit(this.quiz);
    }
}