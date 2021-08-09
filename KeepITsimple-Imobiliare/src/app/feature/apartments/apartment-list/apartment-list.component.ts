import {Component, OnInit} from '@angular/core';
import {ApartmentDetails, OwnerDetails, PictureDetails} from "../model/apartment.data";
import {ApartmentService} from "../apartment.service";
import {WishlistService} from "../../wishlist/wishlist.service";
import {WishlistData} from "../../wishlist/model/wishlist.data";
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
              private _snackBar: MatSnackBar){
  }

  apartments: ApartmentDetails[] = [];
  apartment: ApartmentDetails = new class implements ApartmentDetails {
    city: string = "";
    description: string = "";
    id: number = 0;
    neighbourhood: string = "";
    nrRooms: number = 0;
    owner: OwnerDetails = new class implements OwnerDetails {
      firstName: string = "";
      lastName: string = "";
      phoneNumber: string = "";
      urlStatisticsChart: string = "";
    };
    pictures: PictureDetails[] = [];
    price: number = 0;
    propertyType: string = "";
    surface: number = 0;
    titleApart: string = "";
    transactionType: string = "";
    yearConstruction: number = 0;
  };

  wishlist: WishlistData [] = [];

  ngOnInit(): void {
    this.loadApartments();
    this.loadWishlist();
  }

  toWishlist(index: number) {
    if (!this.tokenService.getUser()) {
      this._snackBar.open('Please log in!','Ok',{
        duration:3000
      });
    } else {
      this.apartmentService.addToWishlist(this.tokenService.getUserId(), this.apartments[index]).subscribe(() =>
        this.loadWishlist());
      // console.log(this.tokenService.getUserEmail());
      // console.log(this.data[index].id);
    }
  }

  loadApartments() {
    this.apartmentService.getApartments().subscribe((data) => this.apartments = data)
  }

  loadWishlist() {
    this.wishlistService.getAllWishlists(this.tokenService.getUserId());
    this.wishlistService.wishlist.subscribe(data => {
      this.wishlist = data;
      console.log(data);
    });
  }
}
