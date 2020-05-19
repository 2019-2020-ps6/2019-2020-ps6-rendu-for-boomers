import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

import { QuizService } from '../../../services/quiz.service';
import { Quiz } from '../../../models/quiz.model';
import { Question } from 'src/models/question.model';

@Component({
    selector: 'app-quiz-form',
    templateUrl: './quiz-form.component.html',
    styleUrls: ['./quiz-form.component.scss']
  })
  export class QuizFormComponent implements OnInit {
    nameOrThemeIsEmpty: boolean;

    @Output()
    quizCreated: EventEmitter<boolean> = new EventEmitter<boolean>();

    @Output()
    quizCanceled: EventEmitter<boolean> = new EventEmitter<boolean>();
    
    public quizForm: FormGroup;

    constructor(public formBuilder: FormBuilder, public quizServices: QuizService)
    {
        this.quizForm = this.formBuilder.group({
            name: [''],
            theme: [''],
            creator: [''],
            bgimage: ['']
        });
    }

    ngOnInit() {

    }

    addQuiz() {
        const quizToCreate: Quiz = this.quizForm.getRawValue() as Quiz;
        if(quizToCreate.name != '' && quizToCreate.theme != ''){
            this.quizServices.addQuiz(quizToCreate);
            this.quizCreated.emit(true);
        }
        else{
            this.setNameOrThemeIsEmpty(true);
        }
    }

    cancelQuiz()
    {
        this.quizCanceled.emit(true);
    }

    setNameOrThemeIsEmpty(bool: boolean){
        this.nameOrThemeIsEmpty = bool;
    }
  }