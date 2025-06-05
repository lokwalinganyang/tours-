import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-destinations',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('800ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class DestinationsComponent {
  destinations = [
    { name: 'Nairobi', description: 'Discover the vibrant capital of Kenya.', image: '/assets/images/tour1.jpg' },
    { name: 'Mombasa', description: 'Explore the coastal beauty of Mombasa.', image: '/assets/images/tour2.jpg' },
    { name: 'Maasai Mara', description: 'Experience the wildlife of Maasai Mara.', image: '/assets/images/tour3.jpg' },
    { name: 'Turkana', description: 'Visit the unique landscapes of Lake Turkana.', image: '/assets/images/tour4.jpg' },
    { name: 'Kisumu', description: 'Enjoy the lakeside charm of Kisumu.', image: '/assets/images/tour1.jpg' }
  ];
}