import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {UserService} from "../user.service";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PasswordResetComponent implements OnInit {

  constructor(private service: UserService,
              private router: Router,
              private _snackBar: MatSnackBar) {
  }

  msgPassReset: string = $localize`:@@msgPassReset:Parola dvs. a fost resetată!\nÎncercați să vă conectați!`;
  msgSomethingWrong: string = $localize`:@@msgSomethingWrong:Ceva nu a mers bine.`;

  ngOnInit(): void {
  }

  resetPassword(obj: { password: string, code: string | null }) {
    // console.log(obj.password, obj.code)
    this.service.resetPassword(obj.password, obj.code).subscribe(() => {
        this.router.navigate(['/login']);
        this._snackBar.open(this.msgPassReset, 'OK', {
          duration:7000,
          panelClass: ['success-snackbar']
        });
      },
      () =>{
        this.router.navigate(['']);
        this._snackBar.open(this.msgSomethingWrong, 'OK', {
          duration:7000,
          panelClass: ['fail-snackbar']
        })
      }
    );
  }

}
