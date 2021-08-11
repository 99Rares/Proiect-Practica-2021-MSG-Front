import {Component, OnInit} from '@angular/core';
import {UserService} from "../user.service";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.scss']
})
export class PasswordResetComponent implements OnInit {

  constructor(private service: UserService,
              private router: Router,
              private _snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
  }

  resetPassword(obj: { password: string, code: string | null }) {
    // console.log(obj.password, obj.code)
    this.service.resetPassword(obj.password, obj.code).subscribe(() =>
      this._snackBar.open('Your password has been reset!', 'OK'), () =>
      this._snackBar.open('Something went wrong.', 'OK'));
  }

}
