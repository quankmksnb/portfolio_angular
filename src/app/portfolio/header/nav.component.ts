import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import NavLinkModel from './model/navModel.model';
import IconModel from './model/iconModel.model';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent {
  listNav: Array<NavLinkModel> = [];
  listIcon: Array<IconModel> = [];
  constructor() {}
  ngOnInit() {
    this.listNav = [
      { label: 'Home', href: '#home-section', title: 'home' },
      { label: 'Case Studies', href: '#case-studies', title: 'Case Studies' },
      { label: 'Testimonials', href: '#testimonials', title: 'Testimonials' },
      { label: 'Recent work', href: '#recent-work', title: 'Recent work' },
      { label: 'Get in touch', href: '#get-in-touch', title: 'Get in touch' },
    ];

    this.listIcon = [
      { 
        href: 'https://www.linkedin.com/',
        title: 'LinkedIn Profile',
        iconClass: 'fa-brands fa-linkedin-in'
      },
      { 
        href: 'https://www.behance.net/',
        title: 'Behance Profile',
        iconClass: 'fa-brands fa-behance'
      },
      { 
        href: 'https://twitter.com/',
        title: 'Twitter',
        iconClass: 'fa-brands fa-twitter'
      }
    ];
  }
}
