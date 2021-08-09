import {Component, OnInit} from '@angular/core';
import {ApartmentService} from "../apartment.service";
import {saveAs} from 'file-saver';
import {TokenStorageService} from "../../services/token-storage.service";
import {WishlistService} from "../../wishlist/wishlist.service";
import {ApartmentDetails} from "../model/apartment.data";


@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.scss']
})
export class DownloadComponent implements OnInit {
  constructor(private service: ApartmentService, private tokenService: TokenStorageService, private wishlistService: WishlistService) {
  }

  apartments: ApartmentDetails[] = []

  ngOnInit(): void {
    this.wishlistService.getAllWishlists(this.tokenService.getUserId());
    this.wishlistService.wishlist.subscribe(data => {
      this.apartments = data;
    });
  }

  downloadFile(filename: string): void {
    this.service
      .download(this.tokenService.getUserEmail())
      .subscribe(blob => saveAs(blob, filename));
  }

  toWishlist(obj: { id: number, liked: boolean }) {
    const index = obj.id
    console.log(index, obj.liked)
    this.wishlistService.deletefromWishlist(this.tokenService.getUserId(), index).subscribe(() => {
      const list=this.apartments.filter(el=>el.id!==index)
      this.wishlistService.wishlist.next(list);
    })

  }

}
