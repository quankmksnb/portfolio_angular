import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],  // Cho phép custom elements
})
export class HomeComponent {}
