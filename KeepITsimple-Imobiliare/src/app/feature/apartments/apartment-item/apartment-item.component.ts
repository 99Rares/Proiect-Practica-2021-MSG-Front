import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ApartmentDetails} from "../model/apartment.data";
import {TokenStorageService} from "../../services/token-storage.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ApartmentService} from "../apartment.service";
import {ShortUser} from "../../users/model/users.data";
import {WishlistData} from "../../wishlist/model/wishlist.data";

@Component({
  selector: 'app-apartment-item',
  templateUrl: './apartment-item.component.html',
  styleUrls: ['./apartment-item.component.scss']
})
export class ApartmentItemComponent implements OnInit {
  @Input() data: ApartmentDetails[] = [];
  @Input() wishlist: WishlistData[] = [];
  @Output() apartmentId: EventEmitter<number> = new EventEmitter<number>();
  color: String = 'gray';

  constructor(private tokenService: TokenStorageService,
              private _snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
  }

  toWishlist(index: number) {
    this.apartmentId.emit(index);
  }

  isFavourite(apartmentId: number): WishlistData | undefined {
    return this.wishlist.find(el => el.apartmentId === apartmentId);
  }
}
