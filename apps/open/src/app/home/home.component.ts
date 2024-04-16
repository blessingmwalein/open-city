import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {

  currentStep = 1;

  constructor(private router: Router) { }


  goToNextStep() {
    this.currentStep++;
    this.router.navigate([`/stepper/step${this.currentStep}`]);
  }

  goToPreviousStep() {
    this.currentStep--;
    this.router.navigate([`/stepper/step${this.currentStep}`]);
  }
}
