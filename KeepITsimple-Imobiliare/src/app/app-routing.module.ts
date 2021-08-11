import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./feature/users/login/login.component";
import {RegisterComponent} from "./feature/users/register/register.component";
import {VerifiedComponent} from "./feature/users/verified/verified/verified.component";
import {ApartmentListComponent} from "./feature/apartments/apartment-list/apartment-list.component";
import {ApartmentPageComponent} from "./feature/apartments/apartment-page/apartment-page.component";
import {DownloadComponent} from "./feature/apartments/download/download.component";
import {StatisticsComponent} from "./feature/apartments/statistics/statistics.component";
import {VreifyEmailComponent} from "./feature/users/vreify-reset/vreify-email.component";
import {PasswordResetComponent} from "./feature/users/password-reset/password-reset.component";

const routes: Routes = [
  {path: '', component: ApartmentListComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'verify', component: VerifiedComponent},
  {path: 'apartments', component: ApartmentListComponent},
  {path: 'apartments/:apartmentId', component: ApartmentPageComponent},
  {path: 'wishlist', component: DownloadComponent},
  {path: 'statistics', component: StatisticsComponent},
  {path: 'reset', component: VreifyEmailComponent},
  {path: 'passwordreset', component: PasswordResetComponent},
  {path: '**', redirectTo: ''}
];

export const routing = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
