import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Question } from 'src/models/question.model';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  @Input()
  question: Question;

  @Output()
  deleteQuestion: EventEmitter<Question> = new EventEmitter<Question>();

  openPopUpToDeleteQuestion: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  delete() {
    this.deleteQuestion.emit(this.question);
  }

  setOpenPopUpToDeleteQuestion(bool: boolean){
    this.openPopUpToDeleteQuestion = bool;
  }
}
