import {Component, OnInit} from '@angular/core';
import {ApartmentDetails} from "../model/apartment.data";
import {ApartmentService} from "../apartment.service";
import {WishlistService} from "../../wishlist/wishlist.service";
import {TokenStorageService} from "../../services/token-storage.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-apartment-list',
  templateUrl: './apartment-list.component.html',
  styleUrls: ['./apartment-list.component.scss']
})
export class ApartmentListComponent implements OnInit {

  constructor(private apartmentService: ApartmentService,
              private wishlistService: WishlistService,
              private tokenService: TokenStorageService,
              private _snackBar: MatSnackBar) {
  }

  apartments: ApartmentDetails[] = [];
  // apartment: ApartmentDetails = new class implements ApartmentDetails {
  //   city: string = "";
  //   description: string = "";
  //   id: number = 0;
  //   neighbourhood: string = "";
  //   nrRooms: number = 0;
  //   owner: OwnerDetails = new class implements OwnerDetails {
  //     firstName: string = "";
  //     lastName: string = "";
  //     phoneNumber: string = "";
  //     urlStatisticsChart: string = "";
  //   };
  //   pictures: PictureDetails[] = [];
  //   price: number = 0;
  //   propertyType: string = "";
  //   surface: number = 0;
  //   titleApart: string = "";
  //   transactionType: string = "";
  //   yearConstruction: number = 0;
  // };

  wishlist: ApartmentDetails [] = [];

  ngOnInit(): void {
    this.loadApartments();
    this.loadWishlist();
  }

  toWishlist(obj: { id: number, liked: boolean }) {
    const index = obj.id
    console.log(index, obj.liked)
    if (!this.tokenService.getUser()) {
      this._snackBar.open('Please log in!', 'Ok', {
        duration: 3000
      });
    } else {
      if (obj.liked) {
        console.log("exista deja")
        this.wishlistService.deletefromWishlist(this.tokenService.getUserId(), index).subscribe(() =>
          this.loadWishlist());
      } else {
        console.log("nu exista")

        this.wishlistService.addToWishlist(this.tokenService.getUserId(), index).subscribe(() =>
          this.loadWishlist());
      }
    }
  }

  loadApartments() {
    this.apartmentService.getApartments().subscribe((data) => this.apartments = data)
  }

  loadWishlist() {
    if (!this.tokenService.getUser()) {
      // this._snackBar.open('Please log in!','Ok',{
      //   duration:3000
      // });
    } else {
      this.wishlistService.getAllWishlists(this.tokenService.getUserId());
      this.wishlistService.wishlist.subscribe(data => {
        this.wishlist = data;
      });
    }
  }
}
