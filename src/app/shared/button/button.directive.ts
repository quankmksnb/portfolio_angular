import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appButton]',
  standalone: true,
})
export class ButtonDirective {
  private classes: Array<string> = ['btn'];
  @HostBinding('class')
  get classList() {
    return this.classes.toString().split(',').join(' ');
  }
  @Input() 
  set buttonType(type: string) {
    switch (type) {
      case 'btn-warning btn-case-study':
        this.classes.push('btn-warning btn-case-study');
        break;
      case 'btn-primary btn-case-study':
        this.classes.push('btn-primary btn-case-study');
        break;
      case 'btn-info btn-case-study':
        this.classes.push('btn-info btn-case-study');
        break;
      case 'btn-success btn-know-more':
        this.classes.push('btn-success btn-know-more');
        break;
      case 'btn-submit':
        this.classes.push('btn-submit');
        break;
    }
  }
  constructor() {}
}
