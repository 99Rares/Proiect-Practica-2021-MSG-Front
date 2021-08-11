import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../user.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class VerifyEmailComponent implements OnInit {

  constructor(private service: UserService,
              private _snackBar: MatSnackBar
  ) {
  }

  resetForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ])
  });

  ngOnInit(): void {
  }

  sendEmail(email: string) {
    this.service.reset(email).subscribe(() =>
        this._snackBar.open('Password-reset email was sent. Check your inbox!', 'OK', {
          duration:7000,
          panelClass: ['success-snackbar']
        }),
      () =>
        this._snackBar.open('Failed to send email. Check your input!', 'OK', {
          panelClass: ['fail-snackbar'],
          duration:5000,
        }));
  }
}
