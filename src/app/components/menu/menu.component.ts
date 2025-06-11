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

  toggleDestinationsDropdown(event?: Event) {
    event?.preventDefault(); // Prevent default behavior if needed
    event?.stopPropagation(); // Stop event from bubbling up
    this.isDestinationsDropdownOpen = !this.isDestinationsDropdownOpen;
  }

  closeDestinationsDropdown() {
    if (this.menuOpen) {
      this.isDestinationsDropdownOpen = false; // Close dropdown only if menu is open
    }
  }
}