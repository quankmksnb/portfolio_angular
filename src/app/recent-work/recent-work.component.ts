import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import RecentWorkModel from './model/recentWorkModel.model';

@Component({
  selector: 'app-recent-work',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recent-work.component.html',
  styleUrl: './recent-work.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class RecentWorkComponent {
  listRecentWork: Array<RecentWorkModel> = [];
  ngOnInit() {
    this.listRecentWork = [
      {
        aHref: '#',
        aTitle: 'Work 1',
        imgHref: 'assets/img/work_one.jpg',
        heading: 'Work name here',
        description: 'Rempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut.',
        contentButton: 'Know more'
      },
      {
        aHref: '#',
        aTitle: 'Work 2',
        imgHref: 'assets/img/work_two.jpg',
        heading: 'Work name here',
        description: 'Rempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut.',
        contentButton: 'Know more'
      },
      {
        aHref: '#',
        aTitle: 'Work 3',
        imgHref: 'assets/img/work_three.png',
        heading: 'Work name here',
        description: 'Rempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut.',
        contentButton: 'Know more'
      },
      {
        aHref: '#',
        aTitle: 'Work 4',
        imgHref: 'assets/img/work_four.png',
        heading: 'Work name here',
        description: 'Rempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut.',
        contentButton: 'Know more'
      },
      {
        aHref: '#',
        aTitle: 'Work 5',
        imgHref: 'assets/img/work_five.png',
        heading: 'Work name here',
        description: 'Rempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut.',
        contentButton: 'Know more'
      },
      {
        aHref: '#',
        aTitle: 'Work 6',
        imgHref: 'ssets/img/work_six.png',
        heading: 'Work name here',
        description: 'Rempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut.',
        contentButton: 'Know more'
      }
    ];
  }
}
