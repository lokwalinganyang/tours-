import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  menuOpen = false;
  isDestinationsDropdownOpen = false; // Track dropdown state for Destinations

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  toggleDestinationsDropdown() {
    this.isDestinationsDropdownOpen = !this.isDestinationsDropdownOpen; // Toggle for mobile
  }

  closeDestinationsDropdown() {
    this.isDestinationsDropdownOpen = false; // Close dropdown after selection
  }
}