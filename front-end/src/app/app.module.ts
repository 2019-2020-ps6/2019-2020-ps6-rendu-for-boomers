import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { MenuComponent } from './menu/menu.component';
import { ReglageComponent } from './reglage/reglage.component';
import { EventEmitterService } from './event-emitter.service';
import { QuizzComponent } from './quizz/quizz.component';
import { HttpClientModule } from '@angular/common/http';
import { CloseReglageService } from './close-reglage.service';


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
  }
];

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    MenuComponent,
    ReglageComponent,
    QuizzComponent
  ],
  imports: [
    BrowserModule, 
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  exports: [RouterModule],
  providers: [EventEmitterService, CloseReglageService],
  bootstrap: [AppComponent]
})

export class AppModule { }
