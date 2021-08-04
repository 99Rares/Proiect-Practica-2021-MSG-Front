import {Component, OnInit} from '@angular/core';
import {ApartmentDetails} from "../model/apartment.data";
import {ApartmentService} from "../apartment.service";

@Component({
  selector: 'app-apartment-list',
  templateUrl: './apartment-list.component.html',
  styleUrls: ['./apartment-list.component.scss']
})
export class ApartmentListComponent implements OnInit {

  constructor(private apartmentService: ApartmentService) {
  }

  apartments: ApartmentDetails[] = [];

  ngOnInit(): void {
    this.loadApartments()
  }

   loadApartments() {
    this.apartmentService.getApartments().subscribe((data)=>this.apartments=data)
  }
}
