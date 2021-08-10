import {Component, OnInit} from '@angular/core';
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

  apartment: ApartmentDetails | undefined;

  getStatistics1Data: string = '';

  constructor(private route: ActivatedRoute,
              private apartmentService: ApartmentService,
              private wishlistService: WishlistService,
              private tokenService: TokenStorageService,
              private _snackBar: MatSnackBar
  ) {
  }

  ngOnInit(): void {

    const routeParams = this.route.snapshot.paramMap;
    const apartmentIdFromRoute = Number(routeParams.get('apartmentId'));
    this.wishlistService.loadWishlist()
    this.apartmentService.getApartmentsDetail(apartmentIdFromRoute).subscribe((data) => this.apartment = data);
    this.getStatistics1(apartmentIdFromRoute)
  }

  async toWishlist(id: number) {
    this.wishlistService.toWishlist(id)
    await new Promise(f => setTimeout(f, 10));
    this.getStatistics1(id)
  }

  isFavourite(apartmentId: number) {
    return this.wishlistService.isFavourite(apartmentId)
  }

  getStatistics1(apartmentId: number) {
    this.wishlistService.getStatistics1(apartmentId).subscribe(data => this.getStatistics1Data = data)
  }
}
