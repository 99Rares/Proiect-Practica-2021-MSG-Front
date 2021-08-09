import {Injectable} from '@angular/core';
import {BackendService} from "../../backend/backend.service";
import {BehaviorSubject, Observable} from "rxjs";
import {ApartmentDetails} from "../apartments/model/apartment.data";

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(private backendService: BackendService) {
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
      console.log(data);
    });
  }

  deletefromWishlist(userId: number, apartment: number): Observable<void> {
    console.log(userId, apartment);
    return this.backendService.delete(`${this.api}/${this.deleteWishlistEndpoint}/${userId}/apartment/${apartment}`);
  }

  addToWishlist(userId: number, apartment: number): Observable<void> {
    console.log(userId, apartment);
    return this.backendService.post(`${this.api}/${this.addWishlistEndpoint}/${userId}/${apartment}`);
  }
}
