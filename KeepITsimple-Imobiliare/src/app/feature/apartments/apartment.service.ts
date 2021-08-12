import {Injectable} from '@angular/core';
import {BackendService} from "../../backend/backend.service";
import {ApartmentDetails, OwnerDetails} from "./model/apartment.data";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApartmentService {
  api = 'http://localhost:8080';
  apartmentsEndpoint = 'api/apartments';
  wishlistEndpoint = 'api/wishlist/pdf';
  apartmentsByOwnerEndpoint = 'api/apartments/getByOwner';
  ownersEndpoint = 'api/owners';
  wishlistGetByOwnerEndpoint = 'api/wishlist/byOwner';

  constructor(private service: BackendService, private http: HttpClient) {
  }

  getApartments(): Observable<ApartmentDetails[]> {
    return this.service.get(`${this.api}/${this.apartmentsEndpoint}`);
  }

  getApartmentsByOwner(id: number): Observable<ApartmentDetails[]> {
    return this.service.get(`${this.api}/${this.apartmentsByOwnerEndpoint}/${id}`);
  }

  getApartmentsDetail(id: number): Observable<ApartmentDetails> {
    return this.service.get(`${this.api}/${this.apartmentsEndpoint}/${id}`);
  }

  download(id: number): Observable<Blob> {
    return this.http.get(`${this.api}/${this.wishlistEndpoint}/${id}`, {
      responseType: 'blob'
    });
  }

  getOwner(id: number): Observable<OwnerDetails> {
    return this.service.get(`${this.api}/${this.ownersEndpoint}/${id}`);
  }

  getNumberOfApartmentsFromASpecificOwnerInWishlist(id: number) : Observable<number> {
    return this.service.get(`${this.api}/${this.wishlistGetByOwnerEndpoint}/${id}`);
  }
}
