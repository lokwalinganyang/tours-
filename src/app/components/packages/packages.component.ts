import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-packages',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('800ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class PackagesComponent {
  packages = [
    { name: 'Scenic Kenya', description: 'Explore Kenya’s stunning landscapes and wildlife with breathtaking views.' },
    { name: 'Through Rift Valley', description: 'Journey through the Great Rift Valley with diverse parks and lakes.' },
    { name: 'Kenya Classic', description: 'A timeless safari covering iconic reserves like Masai Mara and Amboseli.' },
    { name: 'Kilimanjaro to Mombasa', description: 'Travel from Kilimanjaro’s slopes to Mombasa’s beaches with game drives.' },
    { name: 'Mombasa Rendezvous', description: 'Combine Mombasa’s coast with safaris in Tsavo and Amboseli parks.' },
    { name: 'Kenya Odyssey to Mombasa', description: 'An epic adventure from Nairobi to Mombasa via multiple parks.' },
    { name: 'Elewana Sky Safaris', description: 'Luxury fly-in safaris to Kenya’s top destinations with stunning aerial views.' }
  ];

  // Method to format package name for URL
  getPackageUrl(packageName: string): string {
    return packageName.toLowerCase().replace(/\s+/g, '-');
  }
}