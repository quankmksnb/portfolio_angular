import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import TestimonialsModel from './model/testimonials.model';
import { HeaderComponent } from "../shared/header/header.component";
import { title } from 'process';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent {
  listTestimonials: Array<TestimonialsModel> = [];
  constructor() {}
  ngOnInit() {
    this.listTestimonials = [
      {
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        imgHref: 'assets/img/avt_one.png',
        imgAlt: 'Client 1',
        name: 'Client Name',
      },
      {
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        imgHref: 'assets/img/avt_two.png',
        imgAlt: 'Client 1',
        name: 'Client Name',
      },
      {
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        imgHref: 'assets/img/avt_three.png',
        imgAlt: 'Client 1',
        name: 'Client Name',
      },
      {
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        imgHref: 'assets/img/avt_four.png',
        imgAlt: 'Client 1',
        name: 'Client Name',
      }
    ];
  }
  heading = {
    title: 'Testimonials',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    titleColor: 'white' as const
  }
}
