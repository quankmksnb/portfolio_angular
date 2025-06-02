import { Component } from '@angular/core';
import { CaseStudiesComponent } from './components/case-studies/case-studies.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { RecentWorkComponent } from './components/recent-work/recent-work.component';
import { GetInTouchComponent } from './components/get-in-touch/get-in-touch.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/portfolio/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent , CaseStudiesComponent, TestimonialsComponent, RecentWorkComponent, GetInTouchComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'clone_figma';
}
