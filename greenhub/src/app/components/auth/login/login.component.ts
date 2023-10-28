import {Component, EventEmitter, Output} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import StorageService from "../../../services/storage.service";
import {StorageKey} from "../../../models/enums/storage-key";
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends StorageService{
  user = this.fb.group({
    email: ['', Validators.required, Validators.minLength(8)],
    password: ['', Validators.required]
  });
  globalError: string | undefined;
  @Output() signUp: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() forgotPassword: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) {
    super();
  }

  login({value, valid}: { value: any, valid: boolean }) {
    this.globalError = '';
    if (valid) {
      this.authService.login(value);
    } 
  }

  goToSignUp(e: Event): void {
    e.preventDefault();
    e.stopPropagation();
    this.signUp.emit(true);
  }

  goToResetPassword(): void {
    this.forgotPassword.emit(true);
  }
}
