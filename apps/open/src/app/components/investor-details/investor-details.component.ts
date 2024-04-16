import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-investor-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './investor-details.component.html',
  styleUrl: './investor-details.component.css',
})
export class InvestorDetailsComponent {
  selectedOption = 'ownCompany';

  constructor() {
    this.selectedOption = 'ownCompany'; // Initialize selected option
  }

  selectOption(option: string) {
    this.selectedOption = option;
  }

  onSubmit() {
    // Handle form submission logic here
  }
}
