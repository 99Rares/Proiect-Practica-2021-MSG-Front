import {Injectable} from '@angular/core';
import {BackendService} from "../../backend/backend.service";
import {BehaviorSubject, Observable} from "rxjs";
import {ApartmentDetails} from "../apartments/model/apartment.data";
import {TokenStorageService} from "../services/token-storage.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(private backendService: BackendService,
              private tokenService: TokenStorageService,
              private _snackBar: MatSnackBar) {
  }

  api = 'http://localhost:8080';
  url = 'http://localhost:8080/api/wishlist';
  deleteWishlistEndpoint = 'api/wishlist/user';
  addWishlistEndpoint = 'api/wishlist';
  ///api/wishlist/user/{userId}/apartment/{apId}
  wishlist: BehaviorSubject<ApartmentDetails []> = new BehaviorSubject<ApartmentDetails []>([]);

  getAllWishlists(userId: number) {
    this.backendService.get(`${this.url}/${userId}`).subscribe(data => {
      this.wishlist.next(data);
    });
  }

  deletefromWishlist(userId: number, apartment: number): Observable<void> {
    return this.backendService.delete(`${this.api}/${this.deleteWishlistEndpoint}/${userId}/apartment/${apartment}`);
  }

  addToWishlist(userId: number, apartment: number): Observable<void> {
    return this.backendService.post(`${this.api}/${this.addWishlistEndpoint}/${userId}/${apartment}`);
  }

  toWishlist(id: number) {
    const index = id
    if (!this.tokenService.getUser()) {
      this._snackBar.open('Please log in!', 'Ok', {
        duration: 3000
      });
    } else {
      if (this.isFavourite(index)) {
        this.deletefromWishlist(this.tokenService.getUserId(), index).subscribe(() =>
          this.loadWishlist());
      } else {

        this.addToWishlist(this.tokenService.getUserId(), index).subscribe(() =>
          this.loadWishlist());
      }
    }
  }

  isFavourite(apartmentId: number) {
    return !!this.wishlist.value.find(el => {
      return el.id === apartmentId;
    });
  }

  loadWishlist() {
    if (!this.tokenService.getUser()) {
    } else {
      this.getAllWishlists(this.tokenService.getUserId());
    }
  }
}
