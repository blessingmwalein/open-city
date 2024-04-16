import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-investor-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './investor-details.component.html',
  styleUrl: './investor-details.component.css',
})
export class InvestorDetailsComponent {
  readonly #router = inject(Router);
  selectedOption = 'ownCompany';
  selectedLocation = 'local';

  constructor() {
    this.selectedOption = 'ownCompany'; // Initialize selected option
  }

  selectOption(option: string) {
    this.selectedOption = option;
  }

  selectLocation(location: string) {
    // Handle location selection logic here
    this.selectedLocation = location;
  }

  onSubmit() {
      this.#router.navigate([`/personal-details`]);
  }
}
