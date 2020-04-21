import { Component, Input, OnInit } from '@angular/core';
import { CloseReglageService } from '../close-reglage.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit
{
    @Input()
    title: string;

    buttonIsActivated: boolean = false;
    buttonObserver: Subscription;

    constructor(private router: Router, private closeReglageService: CloseReglageService)
    {

    }

    ngOnInit(): void 
    {
        this.buttonObserver = this.closeReglageService.closeReglage$.subscribe(() => {
            this.buttonIsActivated = false;
        });

        this.closeReglageService.update();
    }

    goToReglageOrQuit(): void {
        if (this.buttonIsActivated == false)
            this.buttonIsActivated = true;
        else 
            this.buttonIsActivated = false;
    }

    goToMenu(): void
    {
        this.router.navigate(['/menu']);
    }
}