import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { QuizService } from '../../../services/quiz.service';
import { Quiz } from 'src/models/quiz.model';
import { Question } from 'src/models/question.model';

@Component({
    selector: 'app-question-form',
    templateUrl: './question-form.component.html',
    styleUrls: ['./question-form.component.scss']
})
export class QuestionFormComponent implements OnInit
{
    @Input()
    quiz: Quiz;

    public questionForm: FormGroup;

    public questionIsEmpty: boolean;
    public answerIsEmpty: boolean;
    public isThereAnswer: boolean;
    public isThereOneGoodAnswer: boolean;

    constructor(public formBuilder: FormBuilder, private quizSerivce: QuizService)
    {
        this.initializeQuestionForm();
    }

    private initializeQuestionForm()
    {
        this.questionForm = this.formBuilder.group({
            label: ['', Validators.required],
            answers: this.formBuilder.array([])
        });
    }

    ngOnInit()
    {

    }

    get answers()
    {
        return this.questionForm.get('answers') as FormArray;
    }

    private createAnswer()
    {
        return this.formBuilder.group({
            value: '',
            isCorrect: false,
        });
    }

    addAnswer()
    {
        this.answers.push(this.createAnswer());
    }

    addQuestion()
    {
        if(this.questionForm.valid && this.answers.length!=0 && this.checkIfAllAnswersAreFilled() == true && this.checkIfOneAnswerIsTrue() == true)
        {
            const question = this.questionForm.getRawValue() as Question;
            this.quizSerivce.addQuestion(this.quiz, question);
            this.initializeQuestionForm();
        }
        else if(this.questionForm.valid != true)
            this.setQuestionIsEmpty(true);
        else if(this.answers.length == 0)
            this.setIsThereAnswer(true);
        else if(this.checkIfAllAnswersAreFilled() != true)
            this.setAnswerIsEmpty(true);
        else if(this.checkIfOneAnswerIsTrue() != true) {
            this.setIsThereOneGoodAnswer(true);
        }
    }

    checkIfAllAnswersAreFilled(): boolean{
        for(let answer of this.answers.value){
            if(answer.value == ""){
                return false;
            }
        }
        return true;
    }

    checkIfOneAnswerIsTrue(): boolean {
        for(let answer of this.answers.value){
            if(answer.isCorrect == true)
                return true;
        }
        return false;
    }

    setQuestionIsEmpty(bool: boolean){
        this.questionIsEmpty = bool;
    }

    setAnswerIsEmpty(bool: boolean){
        this.answerIsEmpty = bool;
    }

    setIsThereAnswer(bool: boolean){
        this.isThereAnswer = bool;
    }

    setIsThereOneGoodAnswer(bool: boolean){
        this.isThereOneGoodAnswer = bool;
    }
}