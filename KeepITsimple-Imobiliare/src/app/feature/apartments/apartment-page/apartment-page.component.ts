import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ApartmentDetails} from "../model/apartment.data";
import {ApartmentService} from "../apartment.service";
import {WishlistService} from "../../wishlist/wishlist.service";
import {TokenStorageService} from "../../services/token-storage.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-apartment-page',
  templateUrl: './apartment-page.component.html',
  styleUrls: ['./apartment-page.component.scss']
})
export class ApartmentPageComponent implements OnInit {
  @Output() pageEmitter: EventEmitter<{ id: number, liked: boolean }> = new EventEmitter<{ id: number, liked: boolean }>();

  apartment: ApartmentDetails | undefined;

  constructor(private route: ActivatedRoute,
              private apartmentService: ApartmentService,
              private wishlistService: WishlistService,
              private tokenService: TokenStorageService,
              private _snackBar: MatSnackBar
  ) {
  }

  wishlist: ApartmentDetails[] = []

  ngOnInit(): void {

    const routeParams = this.route.snapshot.paramMap;
    const apartmentIdFromRoute = Number(routeParams.get('apartmentId'));

    this.apartmentService.getApartmentsDetail(apartmentIdFromRoute).subscribe((data) => this.apartment = data);
    this.wishlistService.wishlist.subscribe(data => this.wishlist = data)
  }

  toWishlist(id: number) {
    if (!this.tokenService.getUser()) {
      this._snackBar.open('Please log in!', 'Ok', {
        duration: 3000
      });
    } else {
      if (this.isFavourite(id)) {
        this.wishlistService.deletefromWishlist(this.tokenService.getUserId(), id).subscribe(() =>
          this.loadWishlist());
      } else {
        this.wishlistService.addToWishlist(this.tokenService.getUserId(), id).subscribe(() =>
          this.loadWishlist());
      }
    }
  }

  isFavourite(apartmentId: number) {
    return !!this.wishlist.find(el => {
      return el.id === apartmentId;
    });
  }

  loadWishlist() {
    if (!this.tokenService.getUser()) {
    } else {
      this.wishlistService.getAllWishlists(this.tokenService.getUserId());
      this.wishlistService.wishlist.subscribe(data => {
        this.wishlist = data;
      });
    }
  }
}
