import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {UserService} from "../user.service";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {LongUser} from "../model/users.data";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class RegisterComponent implements OnInit {

  constructor(
    private service: UserService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {
  }

  msgRegisterSuccess: string = $localize`:@@msgRegisterSuccess:Te-ai inregistrat cu succes!\nVă rugăm să verificați adresa de e-mail pentru a vă confirma contul!`;
  msgRegisterFail: string = $localize`:@@msgRegisterFail:Înregistrare eșuată!`;

  ngOnInit(): void {
  }

  register(user: LongUser) {
    this.service.register(user).subscribe(
      data => {
        this._snackBar.open(this.msgRegisterSuccess, 'OK', {
          duration: 10000,
          panelClass: ['success-snackbar']
        });
      },
      (error) => this._snackBar.open(this.msgRegisterFail, "Ok", {
        duration: 3000,
        panelClass: ['fail-snackbar']
      })
    )
  }


}
