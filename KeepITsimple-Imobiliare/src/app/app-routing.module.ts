import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./feature/users/login/login.component";
import {RegisterFormComponent} from "./feature/users/register-form/register-form.component";
import {RegisterComponent} from "./feature/users/register/register.component";
import {VerifiedComponent} from "./feature/users/verified/verified/verified.component";

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path:'register', component: RegisterComponent},
  { path: 'verify', component: VerifiedComponent },
  { path: '**', redirectTo: '' },

];

export const routing = RouterModule.forRoot(routes);
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
