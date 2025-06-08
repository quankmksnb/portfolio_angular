import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { CommonModule } from '@angular/common';
import LogoModel from './model/logoModel.model';
import { NavComponent } from './header/nav.component';
import { ButtonDirective } from '../shared/button/button.directive';

register();

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavComponent, CommonModule, ButtonDirective],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],  // Cho phép custom elements
})
export class PortfolioComponent {
  listLogo: Array<LogoModel> = [];

  info = {
    name: 'Nguyễn Minh Quân',
    intro: ' Intro text: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  }
  ngOnInit () {
    this.listLogo = [
      {
        href : 'assets/img/logo_one.png',
        title : 'ClickUp Logo',
        width : 82.32,
        height : 20 
      },
      {
        href : 'assets/img/logo_two.png',
        title : 'Dropbox Logo',
        width : 94.83,
        height : 22 
      },
      {
        href : 'assets/img/logo_three.png',
        title : 'PAYCHEX Logo',
        width : 87.06,
        height : 14 
      },
      {
        href : 'assets/img/logo_four.png',
        title : 'Elastic Logo',
        width : 81.4,
        height : 28 
      },
      {
        href : 'assets/img/logo_five.png',
        title : 'Stripe Logo',
        width : 60.08,
        height : 25 
      }
    ];
  }
}
