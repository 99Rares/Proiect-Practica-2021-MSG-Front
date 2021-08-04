import { Injectable } from '@angular/core';
import {BackendService} from "../../backend/backend.service";
import {ApartmentDetails} from "./model/apartment.data";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApartmentService {
  api = 'http://localhost:8080';
  productsEndpoint = 'api/apartments';

  constructor(private service: BackendService ) {}

  getApartments(): Observable<ApartmentDetails[]> {
    return this.service.get(`${this.api}/${this.productsEndpoint}`);
  }

}
