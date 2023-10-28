import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {provideToastr, ToastrModule} from "ngx-toastr";
import {provideAnimations, BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {SharedModule} from "./shared.module";
import {MAT_DATE_LOCALE} from "@angular/material/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthModule } from './components/auth/auth.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    SharedModule,
    BrowserAnimationsModule
  ],
  providers: [
    provideAnimations(),
    provideToastr(),
    {provide: MAT_DATE_LOCALE, useValue: 'uk'},],
  bootstrap: [AppComponent]
})
export class AppModule { }
