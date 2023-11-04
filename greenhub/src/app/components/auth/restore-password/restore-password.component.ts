import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-restore-password',
  templateUrl: './restore-password.component.html',
  styleUrls: ['./restore-password.component.scss']
})
export class RestorePasswordComponent {
  @Output() back: EventEmitter<boolean> = new EventEmitter<boolean>();
  restoreForm: FormGroup;
  emailSent: boolean = false; 

  constructor() {
    this.restoreForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  restorePassword() {
    if (this.restoreForm.valid) {
      this.emailSent = true;
    }
  }

  goToLogin() {
    this.back.emit(true);
  }
}
