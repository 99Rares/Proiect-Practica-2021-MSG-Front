import { Component, OnInit } from '@angular/core';
import {ApartmentDetails} from "../../apartments/model/apartment.data";
import {WishlistService} from "../../wishlist/wishlist.service";

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  constructor(private wishlistService: WishlistService) { }

  apartments: ApartmentDetails[] = []

  ngOnInit(): void {
    this.wishlistService.toHistory();
    this.wishlistService.loadWishlist()
    this.wishlistService.history.subscribe(data => {
      this.apartments = data;
    });
    // this.apartments= JSON.parse(<string>localStorage.getItem("my_history")); //get them back
  }
  toWishlist(id: number) {
    this.wishlistService.toWishlist(id);
  }

}
