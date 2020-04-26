import { Component, OnInit } from '@angular/core';
import { Quiz } from 'src/models/quiz.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})

export class EditorComponent implements OnInit {
  public pageTitle: string = "Éditeur de quiz";

  public creatingQuiz: boolean = false;

  deletableQuiz: boolean = true;

  constructor(private router: Router) { 
   
  }

  ngOnInit(): void {}

  startQuizCreation(): void
  {
    this.creatingQuiz = true;
  }

  quizCreated(selected: boolean)
  {
    this.creatingQuiz = false;
  }

  handleSelection(quiz: Quiz)
  {
    this.router.navigate(['/modify/'+ quiz.id]);
  }
}