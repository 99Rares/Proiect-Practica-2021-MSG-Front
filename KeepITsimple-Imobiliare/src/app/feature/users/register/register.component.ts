import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {LongUser} from "../model/users.data";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(
    private service: UserService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
  }

  register(user: LongUser) {
    this.service.register(user).subscribe(
      data => {
        //this.router.navigate(['/products']);
        this._snackBar.open('You have registered successfully!',"Ok");
      },
      (error) => console.log(this._snackBar.open('Registration failed!',"Ok"))
    )
  }


}
