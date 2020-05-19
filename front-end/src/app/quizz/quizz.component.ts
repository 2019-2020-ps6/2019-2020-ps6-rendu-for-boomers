import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from '../../services/quiz.service';
import { Quiz } from 'src/models/quiz.model';
import { ReglageService } from 'src/services/reglage.service';


@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.scss']
})
export class QuizzComponent implements OnInit 
{
  public quiz: Quiz;
  public questionIndex: number;
  public selectedAnswer: number = -1;
  public  answerIsSelected: boolean;
  public answerString: string;
  public validAnswer: string = "Bravo ! c'est la bonne réponse !";
  public invalidAnswer: string = "Non non non ! c'est pas bon ! La bonne réponse était : \n";
  public validAnswerIconSrc: string = "./assets/check_icon.svg";
  public invalidAnswerIconSrc: string = "./assets/cross_icon.svg";
  public answerIconSrc: string;
  public answerIsValid: boolean = false;
  public validAnswerCount: number = 0;
  public invalidAnswerCount: number = 0;
  public marksArray: Array<any> = [ "./assets/rank/ranking-S.png", 
                                    "./assets/rank/ranking-A.png", 
                                    "./assets/rank/ranking-B.png", 
                                    "./assets/rank/ranking-C.png", 
                                    "./assets/rank/ranking-D.png"];
  public mark: string;
  public markcss: string;

  public displayResultPanel: boolean = false;
  public displayFinalResultPanel: boolean = false;

  public doughnutChartLabels = ['bonne réponse', 'mauvaise réponse'];
  public doughnutChartData: Array<any>;
  public doughnutChartType = 'doughnut';
  public doughnutChartColor = 
  [
    { backgroundColor: ['#008000', '#ff0000'], borderWidth: [0, 0],
  hoverBackgroundColor: ['#008000', '#ff0000'] }
  ];
  public doughnutChartOption = 
  {
    tooltips : { enabled : false },
    animation : { duration : 1500, easing : 'easeOutCubic' }
  };

  public valueContrast: number;

  constructor(private route: ActivatedRoute, public quizService: QuizService, public reglageService: ReglageService) 
  {
    this.quizService.quizSelected$.subscribe((quiz) => this.quiz = quiz);

    this.reglageService.valueContrast.subscribe((value: number) => 
    {
      this.valueContrast = value;
    })

    this.questionIndex = 0;
  }

  ngOnInit()
  {
    const id = this.route.snapshot.paramMap.get('id');
    this.quizService.setSelectedQuiz(id);
  }

  getSelectedAnswer(answerIndex: number) {
    this.selectedAnswer = answerIndex
    this.setAnswerIsSelected(true);
  }

  selectAnswer(answerIndex:number)
  {
    if(this.answerIsSelected){
      if(this.quiz.questions[this.questionIndex].answers[answerIndex].isCorrect)
      {
        this.answerIsValid = true;
        this.answerIconSrc = this.validAnswerIconSrc;
        this.validAnswerCount++;
        this.answerString = this.validAnswer;
        this.displayResultPanel = true;
      }
      else
      {
        this.answerIsValid = false;
        this.answerIconSrc = this.invalidAnswerIconSrc;
        this.invalidAnswerCount++;
        this.answerString = this.invalidAnswer + this.findGoodAnswer(this.questionIndex);
        this.displayResultPanel = true;
      }
    }
    else{
      this.answerIsSelected = false;
    }
  }

  findGoodAnswer(questionIndex: number): string{
    for(let answer of this.quiz.questions[questionIndex].answers){
      if(answer.isCorrect)  
        return answer.value;
    }
    return "Aucune";
  }

  goToNextQuestion(): void
  {
    this.displayResultPanel = false;
    this.questionIndex++;
    if(this.questionIndex >= this.quiz.questions.length)
    {
      console.log("heheheheeheheh");
      this.doughnutChartData = [this.validAnswerCount, this.invalidAnswerCount];
      this.calculateMark();
      this.displayFinalResultPanel = true;
      this.questionIndex--;
    }
    this.selectedAnswer = -1;
    this.setAnswerIsSelected(null);
  }

  calculateMark(): void
  {
    var res = this.validAnswerCount/this.quiz.questions.length;
    this.markcss = "rank rank-normal";
    if(res == 1)
      this.mark = this.marksArray[0];
    else if(res >= 0.80)
      this.mark = this.marksArray[1];
    else if(res >= 0.60)
      this.mark = this.marksArray[2];
    else if(res >= 0.40)
      this.mark = this.marksArray[3];
    else
    {
      this.markcss = "rank rank-break"
      this.mark = this.marksArray[4];
    }
  }

  get goodAnswer()
  {
    if(this.validAnswerCount > 1)
      return this.validAnswerCount + " bonnes réponses";
    else if(this.validAnswerCount == 1)
      return this.validAnswerCount + " bonne réponse";
    else
    {
      return "aucune bonne réponse";
    }
  }

  get badAnswer()
  {
    if(this.invalidAnswerCount > 1)
      return this.invalidAnswerCount + " mauvaises réponses";
    else if(this.invalidAnswerCount == 1)
      return this.invalidAnswerCount + " mauvaise réponse";
    else
    {
      return "aucune mauvaise réponse";
    }
  }

  setAnswerIsSelected(bool: boolean){
    this.answerIsSelected = bool;
  }
}
