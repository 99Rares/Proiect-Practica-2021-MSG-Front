import { Component, OnInit } from '@angular/core';
import {ApartmentDetails, OwnerDetails} from "../model/apartment.data";
import {ApartmentService} from "../apartment.service";
import {ActivatedRoute} from "@angular/router";
import {WishlistService} from "../../wishlist/wishlist.service";
import {TokenStorageService} from "../../services/token-storage.service";
import {$localize} from "@angular/localize/init";

@Component({
  selector: 'app-apartment-by-owner',
  templateUrl: './apartment-by-owner.component.html',
  styleUrls: ['./apartment-by-owner.component.scss']
})
export class ApartmentByOwnerComponent implements OnInit {

  owner: OwnerDetails = new class implements OwnerDetails {
    firstName: string = "";
    id: number = 0;
    lastName: string = "";
    phoneNumber: string = "";
    urlStatisticsChart: string = "";
  };

  //owner: OwnerDetails | undefined;

  apartments: ApartmentDetails[] = [];
  wishlist: ApartmentDetails [] = [];
  statisticData: any;
  statisticArray: number[] = [];

  constructor(private route: ActivatedRoute,
              private apartmentService: ApartmentService,
              private wishlistService: WishlistService,
              private tokenService: TokenStorageService,) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const ownerIdFromRoute = Number(routeParams.get('ownerId'));
    this.loadApartments(ownerIdFromRoute);
    this.getOwner(ownerIdFromRoute);
    this.loadWishlist();
    this.loadStatistics(ownerIdFromRoute);
    this.loadChart();
  }

  loadApartments(id: number) {
    this.apartmentService.getApartmentsByOwner(id).subscribe((data) => {
      this.apartments = data;
    })
  }

  getOwner(id: number) {
    this.apartmentService.getOwner(id).subscribe((data) => {
      this.owner = data;
    })
  }

  toWishlist(id: number) {
    this.wishlistService.toWishlist(id)
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

  loadStatistics(ownerId: number) {
    this.apartmentService.getNumberOfApartmentsFromASpecificOwnerInWishlist(ownerId).subscribe(data => {
      this.statisticArray.push(data);
    });
    this.apartmentService.getApartmentsByOwner(ownerId).subscribe(data => {
      this.statisticArray.push(data.length);
    });
  }

  async loadChart() {
    await new Promise(f => setTimeout(f, 100));
    this.statisticData = [
      {name: 'How many times appears the apartments from ' + this.owner.firstName + ' in the wishlists of any user', value: this.statisticArray[0]},
      {name: 'How many apartments belongs to ' + this.owner.firstName, value: this.statisticArray[1]}
    ]
  }

}
