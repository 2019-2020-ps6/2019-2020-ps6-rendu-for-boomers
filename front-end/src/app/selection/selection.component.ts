import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Quiz } from 'src/models/quiz.model';

@Component({
    selector: 'app-selection',
    templateUrl: './selection.component.html',
    styleUrls: ['./selection.component.scss']
})
export class SelectionComponent implements OnInit
{

    public pageTitle: string = "LE GIGA TITRE";

    constructor(private router: Router)
    {

    }

    ngOnInit(): void
    {
        
    }

    handleSelection(quiz: Quiz)
    {
        this.router.navigate(['/quizz/'+ quiz.id]);
    }
}