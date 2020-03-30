import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReglageService {
  public defaultValue: number;

  constructor() {
    this.defaultValue = 45;
  }
}
