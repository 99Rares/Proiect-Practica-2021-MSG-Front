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
import {passwordsMustMatchValidatorDirective} from "./feature/users/passwordsMatch.directive";
import {MatButtonModule} from "@angular/material/button";
import {LogoutComponent} from './feature/users/logout/logout.component';
import {HeaderComponent} from './feature/header/header.component';
import {RegisterFormComponent} from './feature/users/register-form/register-form.component';
import {RegisterComponent} from "./feature/users/register/register.component";
import {MatIconModule} from "@angular/material/icon";
import {authInterceptorProviders} from "./feature/helpers/auth.interceptor";
import {VerifiedComponent} from "./feature/users/verified/verified/verified.component";
import {ApartmentListComponent} from './feature/apartments/apartment-list/apartment-list.component';
import {ApartmentItemComponent} from './feature/apartments/apartment-item/apartment-item.component';
import {MatCardModule} from "@angular/material/card";
import {MatToolbarModule} from "@angular/material/toolbar";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatTableModule} from "@angular/material/table";
import {ApartmentPageComponent} from './feature/apartments/apartment-page/apartment-page.component';
import {RouterModule} from "@angular/router";
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatExpansionModule} from "@angular/material/expansion";
import { FilterSortComponent } from './feature/apartments/filter-sort/filter-sort.component';
import {MatSliderModule} from '@angular/material/slider';
import {MatRadioModule} from '@angular/material/radio';
import {MatCarouselModule} from "@ngbmodule/material-carousel";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserFormComponent,
    passwordsMustMatchValidatorDirective,
    LogoutComponent,
    HeaderComponent,
    RegisterFormComponent,
    RegisterComponent,
    VerifiedComponent,
    ApartmentListComponent,
    ApartmentItemComponent,
    FilterSortComponent
    ApartmentItemComponent,
    ApartmentPageComponent,
    ApartmentPageComponent,
    // CarouselModule,
    // WavesModule
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
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatTableModule,
    MatTooltipModule,
    MatExpansionModule,
    MatSliderModule,
    MatRadioModule
    MatTooltipModule,
    ReactiveFormsModule,
    BrowserModule,
    RouterModule,
    MatCarouselModule
  ],
  providers: [BackendService,
    authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule {
}

