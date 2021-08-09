import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {LongUser, ShortUser} from '../model/users.data';
import {UserService} from '../user.service';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {TokenStorageService} from "../../services/token-storage.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None,
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
  ) {
  }

  ngOnInit(): void {
  }

  login(user: ShortUser) {
    this.service.login(user)
      .subscribe((user: LongUser) => {
        this.storageService.saveToken(user.token)
        this.storageService.saveUser(user)
        this.router.navigate([''])
        this._snackBar.open('Logged in successfully!', 'Ok', {
          duration: 5000,panelClass: 'snackbar-success'
        });

      }, error => {
        this._snackBar.open('Log in failed!\nCheck your credentials or verify your email!', 'Ok', {
          panelClass: 'snackbar-fail',duration:10000
        })
      });
  }
}
