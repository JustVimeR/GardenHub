
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.scss']
})
export class NewPasswordComponent {
  passwordForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.passwordForm = this.fb.group({
      // new_password: ['', [Validators.required, Validators.minLength(8)]
    });
  }

  resetPassword() {
    if (this.passwordForm.valid) {
      // this.authService.resetPassword(this.passwordForm.value.new_password);
    }
  }
}
