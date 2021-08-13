import { Component, OnInit } from '@angular/core';
import {WishlistService} from "../../wishlist/wishlist.service";

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {

  constructor(private wishlistService: WishlistService) { }

  apiResponse: any;
  apartmentData: any;

  ngOnInit(): void {
    this.loadStatistics();
  }

  loadStatistics(){

    this.wishlistService.getFromStatistics().subscribe(data => {
      this.apiResponse=data;
      this.apartmentData = [
        { name: "Total apartamente", value:  data.apartmentsTotal},
        { name: "Apartamente in wishlist", value: data.apartmentsInWishlist}
      ]
    });
  }


}
