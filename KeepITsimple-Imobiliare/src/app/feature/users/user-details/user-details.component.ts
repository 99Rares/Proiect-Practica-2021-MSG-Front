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

  msgUpdateSuccess: string = $localize`:@@msgUpdateSuccess:Utilizatorul a fost actualizat cu succes! Vă rugăm să vă deconectați și apoi să vă conectați din nou pentru a vedea modificările dvs.!`;
  msgUpdateFail: string = $localize`:@@msgUpdateFail:Actualizarea datelor utilizatorului nu a reușit`;

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
