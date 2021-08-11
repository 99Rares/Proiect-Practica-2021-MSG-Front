import { Component, OnInit } from '@angular/core';
import {LongUser} from "../model/users.data";
import {TokenStorageService} from "../../services/token-storage.service";
import {Router} from "@angular/router";
import {UserService} from "../user.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  constructor(private tokenStorageService: TokenStorageService, private router: Router, private service: UserService,  private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  updateUser(user: LongUser) {
    console.log("sal")
    this.service.updateUser(user).subscribe(
      () => {
        this.service.getUserDetails(this.tokenStorageService.getUserId())
        this._snackBar.open('User was successfully updated');
      },
      (error) => this._snackBar.open('Failed to update user details')
    );
  }

}
