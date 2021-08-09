import { Injectable } from '@angular/core';
import {BackendService} from "../../backend/backend.service";
import {BehaviorSubject} from "rxjs";
import {WishlistData} from "./model/wishlist.data";

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(private backendService: BackendService) { }

  url = 'http://localhost:8080/api/wishlist';
  wishlist : BehaviorSubject<WishlistData []> = new BehaviorSubject<WishlistData []>([]);

  getAllWishlists(userId: number) {
    this.backendService.get(`${this.url}/userId`).subscribe(data => {
      this.wishlist.next(data);
      console.log(data);
    });
  }
}
