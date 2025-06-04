import { Component } from '@angular/core';
import { CaseStudiesComponent } from './case-studies/case-studies.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { RecentWorkComponent } from './recent-work/recent-work.component';
import { GetInTouchComponent } from './get-in-touch/get-in-touch.component';
import { FooterComponent } from './footer/footer.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PortfolioComponent , CaseStudiesComponent, TestimonialsComponent, RecentWorkComponent, GetInTouchComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'clone_figma';
}
