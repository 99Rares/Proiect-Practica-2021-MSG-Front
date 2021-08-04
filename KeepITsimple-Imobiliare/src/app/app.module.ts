import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {LoginComponent} from "./feature/users/login/login.component";
import {BackendService} from "./backend/backend.service";
import {UserFormComponent} from './feature/users/user-form/user-form.component';
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RegisterFormComponent} from './feature/users/register-form/register-form.component';
import {passwordsMustMatchValidatorDirective} from "./feature/users/passwordsMatch.directive";
import {RegisterComponent} from './feature/users/register/register.component';
import {VerifiedComponent} from "./feature/users/verified/verified/verified.component";
import { ApartmentListComponent } from './feature/apartments/apartment-list/apartment-list.component';
import { ApartmentItemComponent } from './feature/apartments/apartment-item/apartment-item.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserFormComponent,
    RegisterFormComponent,
    passwordsMustMatchValidatorDirective,
    RegisterComponent,
    VerifiedComponent,
    ApartmentListComponent,
    ApartmentItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatInputModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    BrowserAnimationsModule
  ],
  providers: [BackendService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

