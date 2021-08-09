import {Injectable} from '@angular/core';
import {BackendService} from "../../backend/backend.service";
import {ApartmentDetails} from "./model/apartment.data";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {TokenStorageService} from "../services/token-storage.service";
import {UserService} from "../users/user.service";
import {LongUser, ShortUser} from "../users/model/users.data";

@Injectable({
  providedIn: 'root'
})
export class ApartmentService {
  api = 'http://localhost:8080';
  apartmentsEndpoint = 'api/apartments';
  wishlistEndpoint = 'api/wishlist/pdf';
  addWishlistEndpoint = 'api/wishlist';

  constructor(private service: BackendService, private http: HttpClient) {
  }

  getApartments(): Observable<ApartmentDetails[]> {
    return this.service.get(`${this.api}/${this.apartmentsEndpoint}`);
  }

  getApartmentsDetail(id: number): Observable<ApartmentDetails> {
    return this.service.get(`${this.api}/${this.apartmentsEndpoint}/${id}`);
  }

  download(email:string): Observable<Blob> {
    console.log(email)
    return this.http.get(`${this.api}/${this.wishlistEndpoint}/${email}`, {
      responseType: 'blob'
    });
  }

  addToWishlist(userId: number, apartment: ApartmentDetails) : Observable<void> {
    console.log(userId, apartment.id);
    return this.service.post(`${this.api}/${this.addWishlistEndpoint}/${userId}/${apartment.id}`);
  }
}
