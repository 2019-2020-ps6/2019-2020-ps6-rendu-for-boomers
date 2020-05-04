import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ReglageService } from 'src/services/reglage.service';


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

    constructor(private router: Router, private reglageService: ReglageService)
    {

    }

    ngOnInit(): void 
    {
        this.buttonObserver = this.reglageService.closeReglage$.subscribe(() => {
            this.buttonIsActivated = false;
        });

        this.reglageService.update();
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