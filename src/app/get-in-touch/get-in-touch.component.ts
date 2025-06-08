import { Component } from '@angular/core';
import { HeaderComponent } from '../shared/header/header.component';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtonDirective } from '../shared/button/button.directive';

@Component({
  selector: 'app-get-in-touch',
  standalone: true,
  imports: [HeaderComponent, ReactiveFormsModule, CommonModule, ButtonDirective],
  templateUrl: './get-in-touch.component.html',
  styleUrl: './get-in-touch.component.scss',
})
export class GetInTouchComponent {
  heading = {
    title: 'Get in touch',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    titleColor: 'white' as const,
  };
  contactForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    mobile: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[0-9]{8,11}$/),
    ]),
    message: new FormControl('', [
      Validators.required,
      Validators.maxLength(1000),
    ]),
  });

  onSubmit(): void {
    if (this.contactForm.valid) {
      const formData = this.contactForm.value;
      alert(
        'Form đã được gửi thành công!\n\n' +
          'Email: ' +
          formData.email +
          '\n' +
          'Mobile: ' +
          formData.mobile +
          '\n' +
          'Message: ' +
          formData.message
      );
      this.contactForm.reset();
    } else {
      this.contactForm.markAllAsTouched();
    }
  }

  characterCount(): number {
    const message = this.contactForm.get('message')?.value || '';
    return message.length;
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.contactForm.get(fieldName);
    return !!(field && field.invalid && field.touched);
  }

  getErrorMessage(fieldName: string): string {
    const field = this.contactForm.get(fieldName);
    if (!field?.errors || !field.touched) return '';

    // check lỗi
    if (field.errors['required']) {
      if (fieldName === 'email') return 'Email is required';
      if (fieldName === 'mobile') return 'Phone number is required';
      if (fieldName === 'message') return 'Message is required';
    }
    if (field.errors['email']) {
      return 'Email is not in correct format.';
    }
    if (field.errors['pattern']) {
      return 'Phone numbers must only contain 8-11 digits.';
    }
    if (field.errors['maxlength']) {
      return 'Messages must not exceed 1000 characters';
    }

    return '';
  }
}
