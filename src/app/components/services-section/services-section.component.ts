import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-services-section',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './services-section.component.html',
  styleUrls: ['./services-section.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('800ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class ServicesSectionComponent {
  services = [
    { name: 'Safaris', description: 'Experience the thrill of African safaris.', image: 'assets/images/tour1.jpg' },
    { name: 'Game Drives', description: 'Explore wildlife with guided game drives.', image: 'assets/images/tour2.jpg' },
    { name: 'Flight Booking', description: 'Hassle-free flight bookings for your trip.', image: 'assets/images/tour3.jpg' },
    { name: 'Accommodation Booking', description: 'Book the best stays for your journey.', image: 'assets/images/tour4.jpg' },
    { name: 'Airport Transfer', description: 'Seamless airport transfers for your convenience.', image: 'assets/images/tour1.jpg' }, // Reusing tour1
    { name: 'Holiday Planning', description: 'Plan your perfect holiday with us.', image: 'assets/images/tour2.jpg' } // Reusing tour2
  ];
}