import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import WorkStudiesModel from './model/workStudies.model';

@Component({
  selector: 'app-case-studies',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './case-studies.component.html',
  styleUrl: './case-studies.component.scss',
})
export class CaseStudiesComponent {
  listWorkStudies: Array<WorkStudiesModel> = [];
  constructor() {}
  ngOnInit() {
    this.listWorkStudies = [
      {
        imgUrl: 'assets/img/a_two.png',
        imgTitle: 'Case Study 1',
        category: {
          name: 'Fintech',
          type: 'fintech',
        },
        contentH4: 'Work name here',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna.',
        buttonType: 'warning',
        contentButton: 'View case study',
        isSpecial: true,
      },
      {
        imgUrl: 'assets/img/a_three.png',
        imgTitle: 'Case Study 2',
        category: {
          name: 'EdTech',
          type: 'edtech',
        },
        contentH4: 'Work name here',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna.',
        buttonType: 'primary',
        contentButton: 'View case study',
        isSpecial: false,
      },
      {
        imgUrl: 'assets/img/a_four.png',
        imgTitle: 'Case Study 3',
        category: {
          name: 'Pharma',
          type: 'pharma',
        },
        contentH4: 'Work name here',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna.',
        buttonType: 'info',
        contentButton: 'View case study',
        isSpecial: true,
      }
    ];
  }
}
