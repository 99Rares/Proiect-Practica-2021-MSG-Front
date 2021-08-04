import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ShortUser } from '../model/users.data';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

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
    private _snackBar: MatSnackBar


  ) {}

  ngOnInit(): void {}

  login(user: ShortUser) {
    this.service.login(user)
      .subscribe((isValid: any) => {
        if (isValid) {
          sessionStorage.setItem(
            'token',
            btoa(user.username + ':' + user.password)
          );
          this._snackBar.open('Logged in successfully!');
          //this.router.navigate(['']);
        } else {
          this._snackBar.open('Log in failed!');
        }
      });
  }

  logout() {
    localStorage.removeItem('user');
  }
}
