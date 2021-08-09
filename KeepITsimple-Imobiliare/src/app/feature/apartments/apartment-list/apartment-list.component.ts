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
  copyapartments: ApartmentDetails[] = [];
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
    this.apartmentService.getApartments().subscribe((data) =>{ this.apartments = data
    this.copyapartments = data})
  }

  filter(form:any){
    console.log(form);
    if(form.pret){
      this.copyapartments = this.copyapartments.filter(ap =>ap.price <= form.pret)
    }

    if(form.tip == "inchiriere"){
      this.copyapartments = this.copyapartments.filter(ap => ap.transactionType == "inchiriere")
    }
    else
      if(form.tip == "vanzare"){
        this.copyapartments = this.copyapartments.filter(ap => ap.transactionType == "vanzare")
      }

    if(form.oras){
      this.copyapartments = this.copyapartments.filter(ap => ap.city === form.oras)
    }

    if(form.cartier){
      this.copyapartments = this.copyapartments.filter(ap => ap.neighbourhood === form.cartier)
    }

  }



  sort(form:any){
    console.log(form);
    if(form.pretsort == "descrescator"){
      this.copyapartments = this.copyapartments.sort((ap1,ap2) => 0 - (ap1.price > ap2.price ? 1 : -1) );
      //(a,b) =>  a < b ? 1 : a > b ? -1 : 0  (descending)
      //(a,b) => 0 - (a > b ? 1 : -1)         (descending)
    }
    else
      if(form.pretsort == "crescator"){
        this.copyapartments = this.copyapartments.sort();
      }




      if(form.suprafata == "descrescator"){
        this.copyapartments = this.copyapartments.sort((ap1,ap2) => 0 - (ap1.surface > ap2.surface ? 1 : -1) );
      }
      else
      if(form.suprafata == "crescator"){
        this.copyapartments = this.copyapartments.sort();
      }
  }

}
