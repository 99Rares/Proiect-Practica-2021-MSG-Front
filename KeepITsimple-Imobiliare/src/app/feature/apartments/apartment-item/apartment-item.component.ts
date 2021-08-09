import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ApartmentDetails} from "../model/apartment.data";
import {TokenStorageService} from "../../services/token-storage.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-apartment-item',
  templateUrl: './apartment-item.component.html',
  styleUrls: ['./apartment-item.component.scss']
})
export class ApartmentItemComponent implements OnInit {
  @Input() data: ApartmentDetails[] = [];
  @Input() wishlist: ApartmentDetails[] = [];
  @Output() apartmentId: EventEmitter<{ id: number, liked: boolean }> = new EventEmitter<{ id: number, liked: boolean }>();
  color: String = 'gray';

  constructor(private tokenService: TokenStorageService,
              private _snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
  }

  toWishlist(index: number) {
    this.apartmentId.emit({id: index, liked: this.isFavourite(index)});
  }

  isFavourite(apartmentId: number) {
    // console.log('aici');
    // console.log(this.wishlist);
    // return true;
    return !!this.wishlist.find(el => {
      return el.id === apartmentId;
    });
  }
}
