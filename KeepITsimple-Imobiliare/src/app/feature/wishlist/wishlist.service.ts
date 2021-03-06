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
  statisticsEndpoint = 'api/wishlist/statistics';

  statistics1Endpoint = 'api/wishlist/statistics';
  ///api/wishlist/user/{userId}/apartment/{apId}
  wishlist: BehaviorSubject<ApartmentDetails []> = new BehaviorSubject<ApartmentDetails []>([]);
  history: BehaviorSubject<ApartmentDetails []> = new BehaviorSubject<ApartmentDetails []>([]);


  msgSnackbarLogin: string = $localize`:@@msgsnackbarLogin:Va rugam sa va logati!`;

  getAllWishlists(userId: number) {
    this.backendService.get(`${this.url}/${userId}`).subscribe(data => {
      this.wishlist.next(data);
    });
  }

  getStatistics1(apartmentId: number): Observable<string> {
    return this.backendService.get(`${this.api}/${this.statistics1Endpoint}/${apartmentId}`, {responseType: 'text'})
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
      this._snackBar.open(this.msgSnackbarLogin, 'Ok', {
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
  toHistory(){
    var myhistory = JSON.parse(<string>sessionStorage.getItem("my_history"));
    //get them back
    this.history.next(myhistory);
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

  getFromStatistics(){
    return this.backendService.get(`${this.api}/${this.statisticsEndpoint}`);
  }
}
