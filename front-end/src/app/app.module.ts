import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { MenuComponent } from './menu/menu.component';
import { ReglageComponent } from './reglage/reglage.component';
import { QuizzComponent } from './quizz/quizz.component';
import { EditorComponent } from './editor/editor.component';
import { ModifyComponent } from './editor/modify/modify.component';
import { CreateComponent } from './editor/create/create.component';
import { HttpClientModule } from '@angular/common/http';
import { CloseReglageService } from './close-reglage.service';
import { TutorielComponent } from './tutoriel/tutoriel.component';
import { ChartsModule } from 'ng2-charts';
import { QuizzListComponent } from './quizz/quiz-list/quiz-list.component';
import { QuizCardComponent } from './quizz/quiz-card/quiz-card.component';
import { HeaderComponent} from './header/header.component';

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
    path: 'quizz/:id',
    component: QuizzComponent
  },
  {
    path: 'quiz-list',
    component: QuizzListComponent
  },
  {
    path: 'editor',
    component: EditorComponent
  }, 
  {
    path: 'modify',
    component: ModifyComponent
  }, 
  {
    path: 'create',
    component: CreateComponent
  }, 
  {
    path: '', 
    redirectTo: '/accueil',
    pathMatch: 'full'
  },
  {
    path: 'tutoriel',
    component: TutorielComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    MenuComponent,
    ReglageComponent,
    QuizzComponent,
    QuizzListComponent,
    QuizCardComponent,
    EditorComponent,
    ModifyComponent,
    CreateComponent,
    TutorielComponent,
    HeaderComponent

  ],
  imports: [
    BrowserModule, 
    RouterModule.forRoot(appRoutes, {
      anchorScrolling: "enabled",
      scrollPositionRestoration: 'enabled',
      scrollOffset: [0, 64],
    }),
    HttpClientModule,
    ChartsModule,
    FormsModule
  ],
  exports: [RouterModule],
  providers: [CloseReglageService],
  bootstrap: [AppComponent]
})

export class AppModule { }
