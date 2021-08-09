import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ApartmentDetails} from "../model/apartment.data";
import {TokenStorageService} from "../../services/token-storage.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {WishlistService} from "../../wishlist/wishlist.service";

@Component({
  selector: 'app-apartment-item',
  templateUrl: './apartment-item.component.html',
  styleUrls: ['./apartment-item.component.scss']
})
export class ApartmentItemComponent implements OnInit {
  @Input() data: ApartmentDetails[] = [];
  @Input() wishlist: ApartmentDetails[] = [];
  @Output() apartmentId: EventEmitter<number> = new EventEmitter<number>();
  color: String = 'gray';

  constructor(private tokenService: TokenStorageService,
              private _snackBar: MatSnackBar,private wishlistService: WishlistService) {
  }
  ngOnInit(): void {

  }

  toWishlist(id: number) {
    this.apartmentId.emit(id);
  }

  isFavourite(apartmentId: number) {
    return this.wishlistService.isFavourite(apartmentId)
  }
}
