import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss'],
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('800ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class ReviewsComponent {
  sectionTitle = 'Website Review Strategy Audit Schedule';
  sectionDescription = 'Presenting this set of slides with name Website Review Strategy Audit Schedule Analysis. The topics discussed in these slides are Website Review Strategy Audit Schedule. This is a complete...';
  overallRating = 4.5; // Aggregated rating based on 3 reviews
  reviewCount = 3;
  reviews = [
    {
      name: 'Jane Doe',
      location: 'Nairobi, Kenya',
      rating: 5,
      comment: 'An incredible safari experience in Maasai Mara! The guides were knowledgeable, and the accommodations were top-notch.',
      image: 'assets/images/review1.jpg'
    },
    {
      name: 'John Smith',
      location: 'London, UK',
      rating: 4,
      comment: 'The beach getaway to Zanzibar was perfect for our honeymoon. Highly recommend the snorkeling trips!',
      image: 'assets/images/review2.jpg'
    },
    {
      name: 'Aisha Patel',
      location: 'Mumbai, India',
      rating: 5,
      comment: 'The cultural tour was a highlight—learning from the Maasai community was unforgettable.',
      image: 'assets/images/review3.jpg'
    },
    {
      name: 'Carlos Ruiz',
      location: 'Madrid, Spain',
      rating: 4,
      comment: 'Seamless airport transfers and a well-planned itinerary for our Uganda trip. Great service!',
      image: 'assets/images/review4.jpg'
    },
    {
      name: 'Li Wei',
      location: 'Beijing, China',
      rating: 5,
      comment: 'Customized travel planning made our multi-country tour flawless. Can’t wait to return!',
      image: 'assets/images/review5.jpg'
    },
    {
      name: 'Fatima Ahmed',
      location: 'Cairo, Egypt',
      rating: 4,
      comment: 'The flight booking process was smooth, and the safari charter was a thrilling addition.',
      image: 'assets/images/review6.jpg'
    }
  ];
}