import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../../shared.module";
import { RestorePasswordComponent } from './restore-password/restore-password.component';
import { RegistrationDetailsComponent } from './registration-details/registration-details.component';
import { RegistrationServicesComponent } from './registration-services/registration-services.component';

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    RegistrationComponent,
    RestorePasswordComponent,
    RegistrationDetailsComponent,
    RegistrationServicesComponent
  ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule
    ]
})
export class AuthModule { }
