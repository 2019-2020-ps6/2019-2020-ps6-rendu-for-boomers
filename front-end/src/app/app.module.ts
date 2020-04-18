import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { MenuComponent } from './menu/menu.component';
import { ReglageComponent } from './reglage/reglage.component';
import { QuizzComponent } from './quizz/quizz.component';
import { HttpClientModule } from '@angular/common/http';
import { CloseReglageService } from './close-reglage.service';
import { TutorielComponent } from './tutoriel/tutoriel.component';
import { JouerComponent } from './jouer/jouer.component';
import { CreerQuizComponent } from './creer-quiz/creer-quiz.component';
import { ModifierQuizComponent } from './modifier-quiz/modifier-quiz.component';


const appRoutes: Routes = [
  { path: 'accueil', 
    component: AccueilComponent
  },
  {
    path: 'menu',
    component: MenuComponent
  },
  {
    path: 'reglage',
    component: ReglageComponent
  },
  {
    path: 'quizz',
    component: QuizzComponent
  },
  {
    path: '', 
    redirectTo: '/accueil',
    pathMatch: 'full'
  },
  {
    path: 'tutoriel',
    component: TutorielComponent
  },
  {
    path : 'tutoriel/jouer',
    component: JouerComponent
  },
  {
    path: 'tutoriel/creer_quiz',
    component: CreerQuizComponent
  },
  {
    path: 'tutoriel/modifier_quiz',
    component: ModifierQuizComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    MenuComponent,
    ReglageComponent,
    QuizzComponent,
    TutorielComponent,
    JouerComponent,
    CreerQuizComponent,
    ModifierQuizComponent
  ],
  imports: [
    BrowserModule, 
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  exports: [RouterModule],
  providers: [CloseReglageService],
  bootstrap: [AppComponent]
})

export class AppModule { }
