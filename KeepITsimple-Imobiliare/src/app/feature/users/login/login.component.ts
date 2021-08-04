import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {LongUser, ShortUser} from '../model/users.data';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import {TokenStorageService} from "../../services/token-storage.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  constructor(
    private service: UserService,
    private router: Router,
    private _snackBar: MatSnackBar,
    private storageService: TokenStorageService


  ) {}

  ngOnInit(): void {}

  login(user: ShortUser) {
    this.service.login(user)
      .subscribe((user:LongUser) => {
        console.log(user)
        this.storageService.saveToken(user.token)
        this.storageService.saveUser(user)
          this._snackBar.open('Logged in successfully!');

      },error =>{
        console.log(error)
        this._snackBar.open('Log in failed!')
      } );
  }

  logout() {
    localStorage.removeItem('user');
  }
}
