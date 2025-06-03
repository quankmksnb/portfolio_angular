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
      { label: 'Home', href: '#home', title: 'Hello' },
      { label: 'Case Studies', href: '#case-studies' },
      { label: 'Testimonials', href: '#testimonials' },
      { label: 'Recent work', href: '#recent-work' },
      { label: 'Get in touch', href: '#get-in-touch' },
    ];
  }
}
