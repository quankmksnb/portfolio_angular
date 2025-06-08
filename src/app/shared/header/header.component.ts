import { Component, input } from '@angular/core';

@Component({
  selector: 'header-flex',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  title = input.required<string>();
  content = input<string>();
  titleColor = input<'white' | 'black'>('black');
}
