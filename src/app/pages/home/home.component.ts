import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ImageSliderComponent } from '../../components/image-slider/image-slider.component';
import { ServicesSectionComponent } from '../../components/services-section/services-section.component';
import { PackagesComponent } from '../../components/packages/packages.component';// Ensure this import is present
import { trigger, transition, style, animate } from '@angular/animations';
import { BannerComponent } from '../../components/banner/banner.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, ImageSliderComponent, ServicesSectionComponent, PackagesComponent,BannerComponent], // Ensure NewsletterComponent is included
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('800ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class HomeComponent {}