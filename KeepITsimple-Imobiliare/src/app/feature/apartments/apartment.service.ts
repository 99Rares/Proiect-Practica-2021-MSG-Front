import { Injectable } from '@angular/core';
import {BackendService} from "../../backend/backend.service";
import {ApartmentDetails} from "./model/apartment.data";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApartmentService {
  api = 'http://localhost:8080';
  apartmentsEndpoint = 'api/apartments';
  wishlistEndpoint='api/wishlist/pdf';

  constructor(private service: BackendService,private http: HttpClient ) {}

  getApartments(): Observable<ApartmentDetails[]> {
    return this.service.get(`${this.api}/${this.apartmentsEndpoint}`);
  }
  getApartmentsDetail(id: number): Observable<ApartmentDetails> {
    return this.service.get(`${this.api}/${this.apartmentsEndpoint}/${id}`);
  }

  download(): Observable<Blob> {
    return this.http.get(`${this.api}/${this.wishlistEndpoint}`, {
      responseType: 'blob'
    });
  }
}
