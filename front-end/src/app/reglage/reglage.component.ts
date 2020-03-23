import { Component, OnInit } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { AccueilComponent } from '../accueil/accueil.component';

@Component({
  selector: 'app-reglage',
  templateUrl: './reglage.component.html',
  styleUrls: ['./reglage.component.scss']
})

export class ReglageComponent implements OnInit {
  

  constructor() { }

  ngOnInit(): void {
  }

  goBack(): void {
    
  }
}
