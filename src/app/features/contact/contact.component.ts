import { Component } from '@angular/core';
import { ButtonComponent } from '../../shared/components/button/button.component';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ButtonComponent, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  contactForm: FormGroup;
  nameControl: FormControl;
  emailControl: FormControl;
  messageControl: FormControl;
  checkboxControl: FormControl;

  constructor(private scroller: ViewportScroller) {
    this.nameControl = new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(50),
      ],
    });
    this.emailControl = new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.pattern(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/),
      ],
    });
    this.messageControl = new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(500),
      ],
    });

    this.checkboxControl = new FormControl(false, {
      nonNullable: true,
      validators: [Validators.requiredTrue],
    });
    this.contactForm = new FormGroup({
      name: this.nameControl,
      email: this.emailControl,
      message: this.messageControl,
      checkbox: this.checkboxControl,
    });
  }

  handleSubmit() {
    console.log(
      this.contactForm.value.name + ' | ' + this.contactForm.value.email
    );
  }

  handleButtonClick() {
    this.scroller.scrollToPosition([0, 0]);
  }

  getClass(controlName: string) {
    const control = this.contactForm.get(controlName);
    if (control) {
      if (control.invalid && control.touched) {
        return 'invalid';
      } else if (control.valid && (control.dirty || control.touched)) {
        return 'valid';
      } else {
        return '';
      }
    }
    return '';
  }
}
