import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Quiz } from '../../../models/quiz.model';
import { Router } from '@angular/router';
import { ReglageService } from 'src/services/reglage.service';

@Component({
    selector: 'app-quiz-card',
    templateUrl: './quiz-card.component.html',
    styleUrls: ['./quiz-card.component.scss']
})
export class QuizCardComponent implements OnInit {
    
    @Input()
    quiz: Quiz;

    @Input()
    deletable: boolean;

    @Output()
    quizSelected: EventEmitter<Quiz> = new EventEmitter<Quiz>();
    @Output()
    playQuiz: EventEmitter<Quiz> = new EventEmitter<Quiz>();
    @Output()
    deleteQuiz: EventEmitter<Quiz> = new EventEmitter<Quiz>();

    deleteEmit: boolean = false;

    public valueContrast: number;


    constructor(private router: Router, public reglageService: ReglageService) {
        this.reglageService.valueContrast.subscribe((value: number) => 
        {
          this.valueContrast = value;
        })
    }

    get imgPath()
    {
        var style = "background-image: url(";
        if(this.quiz.bgimage)
            style+=this.quiz.bgimage;
        else
            style+=this.choseBackgroundImage();
        
        return style + ")";
    }

    ngOnInit() {
        this.reglageService.updateContrast(this.valueContrast);
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

    choseBackgroundImage():  string{
        if(this.valueContrast == 1){
            return "../../../assets/backgroundDefaultClassique.png";
        }
        if(this.valueContrast == 2){
            return "../../../assets/backgroundDefaultDalto1.png";
        }
        if(this.valueContrast == 3){
            return "../../../assets/backgroundDefaultDalto2.png";
        }
    }

    get creator()
    {
        if(this.quiz.creator)
            return "créé par " + this.quiz.creator;
        else
            return " ";
    }

    get questionCount()
    {
        let count: string = this.quiz.questions.length + " question";
        if(this.quiz.questions.length > 1)
            count += "s";

        return count;
    }
}