import { Component, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { ReglageService } from 'src/services/reglage.service';
import { QuizService } from '../../../services/quiz.service';
import { Quiz } from '../../../models/quiz.model';
import { Question } from '../../../models/question.model';

@Component({
  selector: 'app-editor',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  buttonIsActivated: boolean = false;
  buttonObserver: Subscription;
  public valueContrast: number;
  public height: number;
  public pageTitle: string = "Création d'un quiz";

  title = "Titre";
  nbQuestions = 1;
  theme = "aucun";
  tab = new Array(1);
  questionList: Question[];

  constructor(public reglageService: ReglageService, public quizService: QuizService) { 

  }

  ngOnInit(): void {
    this.buttonObserver = this.reglageService.closeReglage$.subscribe(() => {
      this.buttonIsActivated = false;
    });
    this.reglageService.update();

    this.reglageService.valueContrast.subscribe((value: number) => 
    {
      this.valueContrast = value;
    })
    this.reglageService.updateContrast(this.valueContrast);
  }

  goToReglageOrQuit(): void {
    if ( this.buttonIsActivated == false ) this.buttonIsActivated = true;
    else this.buttonIsActivated = false;
  }

  updateQuestions(nbQuestions: number){
    this.tab=new Array(nbQuestions);
  }

  addQuiz() 
  {
    // We retrieve here the quiz object from the quizForm and we cast the type "as Quiz".
    //const quizToCreate: Quiz = this.quizForm.getRawValue() as Quiz;

    //this.quizService.addQuiz(quizToCreate);
  }
}