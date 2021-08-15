import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from "../services/token-storage.service";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {WishlistService} from "../wishlist/wishlist.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss','./_flag.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private tokenStorageService: TokenStorageService, private router: Router, private _snackBar: MatSnackBar,private wishlistService:WishlistService) {
  }
  count:number=0;
  tooltip1: string = $localize`:@@tooltip1:Gestionați detaliile contului`;
  tooltipLogin: string = $localize`:@@tooltipLogin:Log in`;
  tooltipGotoStatistics: string = $localize`:@@tooltipGotoStatistics:Accesați statistica`;
  tooltipGotoWishlist: string = $localize`:@@tooltipGotoWishlist:Accesați lista de dorințe`;
  tooltipLogout: string = $localize`:@@tooltipLogout:Deconectează-te`;

  msgLogout: string = $localize`:@@msgLogout:Deconectat cu succes!`;

  ngOnInit(): void {
    this.wishlistService.wishlist.subscribe(data=>this.count=data.length)
  }

  login() {
    this.router.navigate(['/login']);
  }

  logout() {
    this.tokenStorageService.signOut();
    window.location.href="/" //to get the browser to navigate to localhost:4200 when clicking on logout
    this._snackBar.open(this.msgLogout, 'Ok', {
      duration: 3000
    });
  }

  wishlist() {
    this.router.navigate(['/wishlist']);
  }

  getFullName() {
    return this.tokenStorageService.getUser();
  }

  isLogged(): boolean {
    return this.tokenStorageService.getUser() ? true : false;
  }

  goToStatistics(){
    this.router.navigate(['/statistics']);
  }

  goToUserDetails(){
    this.router.navigate(['/userDetails']);
  }

}
