import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import NavLinkModel from './model/navModel.model';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  listNav: Array<NavLinkModel> = [];
  constructor() {}
  ngOnInit() {
    this.listNav = [
      { label: 'Home', href: '#home', title: 'home' },
      { label: 'Case Studies', href: '#case-studies', title: 'Case Studies' },
      { label: 'Testimonials', href: '#testimonials', title: 'Testimonials' },
      { label: 'Recent work', href: '#recent-work', title: 'Recent work' },
      { label: 'Get in touch', href: '#get-in-touch', title: 'Get in touch' },
    ];
  }
}
