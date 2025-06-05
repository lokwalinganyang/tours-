import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  standalone: true,
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
  onEnquiry() {
    // Placeholder for enquiry action (e.g., open a modal, navigate, or trigger an email)
    console.log('Enquiry button clicked!');
  }
}