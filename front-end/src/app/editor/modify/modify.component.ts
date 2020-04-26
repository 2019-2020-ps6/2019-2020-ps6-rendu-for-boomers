import { Component, OnInit } from '@angular/core';
import { QuizService } from '../../../services/quiz.service';
import { Quiz } from 'src/models/quiz.model';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-editor',
  templateUrl: './modify.component.html',
  styleUrls: ['./modify.component.scss']
})


export class ModifyComponent implements OnInit {
  public pageTitle: string = "Modifier un quiz";

  public quiz: Quiz;

  constructor(private route: ActivatedRoute, public quizService: QuizService)
  {
    this.quizService.quizSelected$.subscribe((quiz) => this.quiz = quiz);
  }

  ngOnInit(): void 
  {
    const id = this.route.snapshot.paramMap.get('id');
    this.quizService.setSelectedQuiz(id);
  }
}