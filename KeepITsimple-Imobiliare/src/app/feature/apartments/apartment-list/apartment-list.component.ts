import {Component, OnInit} from '@angular/core';
import {ApartmentDetails, OwnerDetails, PictureDetails} from "../model/apartment.data";
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
  apartment: ApartmentDetails = new class implements ApartmentDetails {
    city: string = "";
    description: string = "";
    id: number = 0;
    neighbourhood: string = "";
    nrRooms: number = 0;
    owner: OwnerDetails = new class implements OwnerDetails {
      firstName: string = "";
      lastName: string = "";
      phoneNumber: string = "";
      urlStatisticsChart: string = "";
    };
    pictures: PictureDetails[] = [];
    price: number = 0;
    propertyType: string = "";
    surface: number = 0;
    titleApart: string = "";
    transactionType: string = "";
    yearConstruction: number = 0;
  };

  ngOnInit(): void {
    this.loadApartments()
  }

  loadApartments() {
    this.apartmentService.getApartments().subscribe((data) => this.apartments = data)
  }
}
