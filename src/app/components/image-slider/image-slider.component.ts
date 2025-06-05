import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwlOptions, CarouselModule } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-image-slider',
  standalone: true,
  imports: [CommonModule, CarouselModule],
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss']
})
export class ImageSliderComponent {
  slides = [
    { image: '/assets/images/tour1.jpg', title: 'Discover Paradise' },
    { image: '/assets/images/tour2.jpg', title: 'Adventure Awaits' },
    { image: '/assets/images/tour3.jpg', title: 'Cultural Journey' },
    { image: '/assets/images/tour4.jpg', title: 'Scenic Escape' }
  ];

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['<', '>'],
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    items: 1,
    nav: true,
    autoHeight: false // Explicitly disable autoHeight
  };
}