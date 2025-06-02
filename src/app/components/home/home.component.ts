import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { SwiperModule } from 'swiper/angular';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, SwiperModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
