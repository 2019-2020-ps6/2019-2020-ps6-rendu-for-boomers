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
    quizSelected: EventEmitter<Quiz> = new EventEmitter<Quiz>();
    @Output()
    playQuiz: EventEmitter<Quiz> = new EventEmitter<Quiz>();
    @Output()
    deleteQuiz: EventEmitter<Quiz> = new EventEmitter<Quiz>();

    deleteEmit: boolean = false;

    constructor(private router: Router) {

    }

    ngOnInit() {

    }

    play() {
        //this.playQuiz.emit(this.quiz);
        this.router.navigate(['/quizz/'+ this.quiz.id]);
    }

    selectQuiz() {
        if(this.deleteEmit == false)
            this.quizSelected.emit(this.quiz);
    }

    delete() {
        this.deleteQuiz.emit(this.quiz);
        this.deleteEmit = true;
    }
}