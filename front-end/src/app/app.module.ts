import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { MenuComponent } from './menu/menu.component';

const appRoutes: Routes = [
  { path: 'accueil', 
    component: AccueilComponent
  },
  {
    path: 'menu',
    component: MenuComponent
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
    MenuComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
