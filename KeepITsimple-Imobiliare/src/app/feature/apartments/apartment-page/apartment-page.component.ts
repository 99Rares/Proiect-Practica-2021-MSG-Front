import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ApartmentDetails} from "../model/apartment.data";
import {ApartmentService} from "../apartment.service";

@Component({
  selector: 'app-apartment-page',
  templateUrl: './apartment-page.component.html',
  styleUrls: ['./apartment-page.component.scss']
})
export class ApartmentPageComponent implements OnInit {

  apartment: ApartmentDetails | undefined;

  constructor(private route: ActivatedRoute,
              private apartmentService: ApartmentService) {
  }

  ngOnInit(): void {

    const routeParams = this.route.snapshot.paramMap;
    const apartmentIdFromRoute = Number(routeParams.get('apartmentId'));

    this.apartmentService.getApartmentsDetail(apartmentIdFromRoute).subscribe((data)=>this.apartment=data);
  }

}
