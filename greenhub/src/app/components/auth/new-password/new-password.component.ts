import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.scss']
})
export class NewPasswordComponent {
  passwordForm: FormGroup;
  passwordVisibility: { [key: string]: boolean } = {};

  constructor(private fb: FormBuilder) {
    this.passwordForm = this.fb.group({
      // new_password: ['', [Validators.required, Validators.minLength(8)],
      // repeat_password: ['', [Validators.required]]
    });
  }

  togglePasswordVisibility(field: string) {
    this.passwordVisibility[field] = !this.passwordVisibility[field];
  }

  isPasswordVisible(field: string) {
    return this.passwordVisibility[field];
  }
}
