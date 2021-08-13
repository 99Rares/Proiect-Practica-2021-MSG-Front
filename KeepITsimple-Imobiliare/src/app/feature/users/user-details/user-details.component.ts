import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {LongUser} from "../model/users.data";
import {TokenStorageService} from "../../services/token-storage.service";
import {Router} from "@angular/router";
import {UserService} from "../user.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class UserDetailsComponent implements OnInit {

  constructor(private tokenStorageService: TokenStorageService, private router: Router, private service: UserService,  private _snackBar: MatSnackBar) { }

  msgUpdateSuccess: string = $localize`:@@msgUpdateSuccess:User was successfully updated! Please log out and then log in again to see your changes!`;
  msgUpdateFail: string = $localize`:@@msgUpdateFail:Failed to update user details`;

  ngOnInit(): void {
  }

  updateUser(user: LongUser) {
    this.service.updateUser(user).subscribe(
      (newUser) => {
        this.service.getUserDetails(this.tokenStorageService.getUserId())
        this._snackBar.open(this.msgUpdateSuccess,'OK', {
          duration:7000,
          panelClass: ['success-snackbar']});
      },
      (error) => this._snackBar.open(this.msgUpdateFail, 'OK', {
        panelClass: ['fail-snackbar'],
        duration:5000,
      })
    );
  }

}
