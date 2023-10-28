import {Component, EventEmitter, Output} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {AuthService} from "../../../services/auth.service";
import {ToastrService} from "ngx-toastr";
import {StorageKey} from "../../../models/enums/storage-key";
import StorageService from "../../../services/storage.service";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent extends StorageService{
  user = this.fb.group({
    email: ['', [Validators.required, Validators.minLength(8)]],
    password: ['', [Validators.required, Validators.pattern(/^(?=[^A-Z\s]*[A-Z])(?=[^a-z\s]*[a-z])(?=[^\d\s]*\d)(?=\w*[\W_])\S{8,}$/), Validators.minLength(8)]],
    userName: ['', Validators.required],
    userSurname:['', Validators.required],
    code: ['']
  });
  globalError: string | undefined;
  @Output() signIn: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() registrationDetails: EventEmitter<boolean> = new EventEmitter<boolean>();
  hasCode = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private toastr: ToastrService
  ) {
    super();
  }

  goToSignIn(e: Event): void {
    e.preventDefault();
    e.stopPropagation();
    this.signIn.emit(true);
  }
  
  goToRegistrationDetails(e: Event): void{
    e.preventDefault();
    e.stopPropagation();
    this.registrationDetails.emit(true);
  }

  registration({value, valid}: { value: any, valid: boolean }) {
    this.globalError = '';
        this.authService.confirmRegistration(value).subscribe(response => {
          this.toastr.success('Зареєстровано');
          this.authService.login(value);
      });
   }
}
