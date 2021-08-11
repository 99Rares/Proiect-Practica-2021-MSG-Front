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

  ngOnInit(): void {
  }

  register(user: LongUser) {
    this.service.register(user).subscribe(
      data => {
        //this.router.navigate(['/products']);
        const msg: string = `You have registered successfully! \n Please check your email to confirm your account!`;
        this._snackBar.open(msg, 'OK', {
          duration: 10000,
          panelClass: ['success-snackbar']
        });
      },
      (error) => this._snackBar.open('Registration failed!', "Ok", {
        duration: 3000,
        panelClass: ['fail-snackbar']
      })
    )
  }


}
