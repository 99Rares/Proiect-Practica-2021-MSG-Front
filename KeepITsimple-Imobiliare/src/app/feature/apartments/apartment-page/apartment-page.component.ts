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
  history: ApartmentDetails[] = [];

  getStatistics1Data: string = '';
  tab1 = $localize`:@@tab1:Descriere apartament`;

  constructor(private route: ActivatedRoute,
              private apartmentService: ApartmentService,
              private wishlistService: WishlistService,
              private tokenService: TokenStorageService,
              private _snackBar: MatSnackBar
  ) {
  }

  async ngOnInit(): Promise<void> {
    const routeParams = this.route.snapshot.paramMap;
    const apartmentIdFromRoute = Number(routeParams.get('apartmentId'));
    this.wishlistService.loadWishlist()
    this.apartmentService.getApartmentsDetail(apartmentIdFromRoute).subscribe((data) => this.apartment = data);
    this.getStatistics1(apartmentIdFromRoute);
    await new Promise(f => setTimeout(f, 100));
    this.history = JSON.parse(<string>sessionStorage.getItem("my_history"));
    this.toHistory(this.apartment)
    this.wishlistService.toHistory();
    this.wishlistService.history.subscribe(info => this.history = info)
  }

  async toWishlist(id: number) {
    this.wishlistService.toWishlist(id)
    await new Promise(f => setTimeout(f, 100));
    this.getStatistics1(id)
  }

  toHistory(apartment: ApartmentDetails | undefined) {
    if (this.tokenService.getUser()) {
      // await new Promise(f => setTimeout(f, 100));
      if (apartment) {
        this.history= this.history ?? []
        if (this.isHistory(apartment.id)) {
          const index = this.history.map(function (e) {
            return e.id;
          }).indexOf(apartment.id);
          if (index > -1) {
            this.history.splice(index, 1);
          }
        }
        this.history.unshift(apartment)
        if (this.history.length === 5)
          this.history.pop();
        this.wishlistService.history.next(this.history)
        sessionStorage.setItem("my_history", JSON.stringify(this.history));
      }
    }
  }

  isHistory(apartmentId: number) {
    return !!this.history.find(el => {
      return el.id === apartmentId;
    });
  }

  isFavourite(apartmentId: number) {
    return this.wishlistService.isFavourite(apartmentId)
  }

  getStatistics1(apartmentId: number) {
    this.wishlistService.getStatistics1(apartmentId).subscribe(data => this.getStatistics1Data = data)
  }
}
