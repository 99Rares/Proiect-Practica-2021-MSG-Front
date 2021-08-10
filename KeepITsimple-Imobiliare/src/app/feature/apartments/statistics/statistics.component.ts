import { Component, OnInit } from '@angular/core';
import {WishlistService} from "../../wishlist/wishlist.service";

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {

  constructor(private wishlistService: WishlistService) { }

  percent: number | undefined;

  ngOnInit(): void {
    this.loadStatistics();
  }

  loadStatistics(){

    this.wishlistService.getFromStatistics().subscribe(data => this.percent = data);
  }


}
