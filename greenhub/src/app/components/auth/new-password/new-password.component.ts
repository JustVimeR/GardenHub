import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.scss']
})
export class NewPasswordComponent {
  passwordForm: FormGroup;
  passwordVisibility: { [key: string]: boolean } = {};

  constructor() {
    this.passwordForm = new FormGroup({
      new_password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      repeat_password: new FormControl('', [Validators.required]),
    });
  }

  togglePasswordVisibility(field: string) {
    this.passwordVisibility[field] = !this.passwordVisibility[field];
  }

  isPasswordVisible(field: string) {
    return this.passwordVisibility[field];
  }

  onSubmit() {
    if (this.passwordForm.valid) {
      const newPassword = this.passwordForm.get('new_password')!.value;
      const repeatPassword = this.passwordForm.get('repeat_password')!.value;

      if (newPassword === repeatPassword) {
        // Handle form submission here, e.g., send the data to your server for password change.
      } else {
        // Display an error message or perform some other action.
      }
    }
  }
}
