import {Component, OnInit} from '@angular/core';
import {ApartmentDetails, OwnerDetails, PictureDetails} from "../model/apartment.data";
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
  copyapartments: ApartmentDetails[] = [];
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


  wishlist: ApartmentDetails [] = [];

  ngOnInit(): void {
    this.loadApartments()
    this.loadApartmentsCopy()
    this.loadWishlist();
  }

  toWishlist(id: number) {
    this.wishlistService.toWishlist(id)
  }

  loadApartments() {
    this.apartmentService.getApartments().subscribe((data) =>{ this.apartments = data})
  }

  loadApartmentsCopy() {
    this.apartmentService.getApartments().subscribe((data) =>{this.copyapartments = data})
  }

  filter(form:any){
    console.log(form);
    if(form.pret){
      this.copyapartments = this.apartments.filter(ap =>ap.price <= form.pret)
    }

    if(form.tip == "inchiriere"){
      this.copyapartments = this.apartments.filter(ap => ap.transactionType == "inchiriere")
    }
    else
      if(form.tip == "vanzare"){
        this.copyapartments = this.apartments.filter(ap => ap.transactionType == "vanzare")
      }

    if(form.oras){
      this.copyapartments = this.apartments.filter(ap => ap.city === form.oras)
    }

    if(form.cartier){
      this.copyapartments = this.apartments.filter(ap => ap.neighbourhood === form.cartier)
    }
  }

  sort(form:any){
    console.log(form);
    if(form.pretsort == "descrescator"){
      this.copyapartments = this.copyapartments.sort((ap1,ap2) => 0 - (ap1.price > ap2.price ? 1 : -1) );
    }
    else
      if(form.pretsort == "crescator"){
        this.copyapartments = this.copyapartments.sort((ap1,ap2) => 0 - (ap1.price > ap2.price ? -1 : 1));
      }


      if(form.suprafata == "descrescator"){
        this.copyapartments = this.copyapartments.sort((ap1,ap2) => 0 - (ap1.surface > ap2.surface ? 1 : -1) );
        if(form.pretsort == "descrescator"){
          this.copyapartments = this.copyapartments.sort((ap1,ap2) => 0 - (ap1.price > ap2.price ? 1 : -1) );
        }
        else
        if(form.pretsort == "crescator"){
          this.copyapartments = this.copyapartments.sort((ap1,ap2) => 0 - (ap1.price > ap2.price ? -1 : 1));
        }
      }
      else
      if(form.suprafata == "crescator"){
        this.copyapartments = this.copyapartments.sort((ap1,ap2) => 0 - (ap1.surface > ap2.surface ? -1 : 1));
        if(form.pretsort == "descrescator"){
          this.copyapartments = this.copyapartments.sort((ap1,ap2) => 0 - (ap1.price > ap2.price ? 1 : -1) );
        }
        else
        if(form.pretsort == "crescator"){
          this.copyapartments = this.copyapartments.sort((ap1,ap2) => 0 - (ap1.price > ap2.price ? -1 : 1));
        }
      }
  }


  loadWishlist() {
    if (!this.tokenService.getUser()) {
      // this._snackBar.open('Please log in!','Ok',{
      //   duration:3000
      // });
    } else {
      this.wishlistService.loadWishlist()
      this.wishlistService.wishlist.subscribe(data => {
        this.wishlist = data;
      });
    }
  }
}
