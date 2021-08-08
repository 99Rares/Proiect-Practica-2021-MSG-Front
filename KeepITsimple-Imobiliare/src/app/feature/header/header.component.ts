import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from "../services/token-storage.service";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private tokenStorageService: TokenStorageService, private router: Router, private _snackBar: MatSnackBar,) {
  }

  ngOnInit(): void {
  }

  login() {
    this.router.navigate(['/login']);
  }

  logout() {
    this.tokenStorageService.signOut();
    this._snackBar.open('Logged Out successfully!', 'Ok', {
      duration: 3000
    });
  }

  wishlist() {
    this.router.navigate(['/download']);
  }

  getFullName() {
    return this.tokenStorageService.getUser();
  }

  isLogged(): boolean {
    return this.tokenStorageService.getUser() ? true : false;
  }
}
