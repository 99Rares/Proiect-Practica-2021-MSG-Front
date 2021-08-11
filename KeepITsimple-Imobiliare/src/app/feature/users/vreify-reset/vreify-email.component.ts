import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../user.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-vreify-email',
  templateUrl: './vreify-email.component.html',
  styleUrls: ['./vreify-email.component.scss']
})
export class VreifyEmailComponent implements OnInit {

  constructor(private service: UserService,
              private _snackBar: MatSnackBar) {
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
    this._snackBar.open('Password-reset email was sent. Check your inbox!','OK'),()=>
      this._snackBar.open('Failed to send email. Check your input!','OK'));
  }
}
