import {Injectable} from '@angular/core';
import {BackendService} from "../../../backend/backend.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class VerifiedService {
  api = 'http://localhost:8080';
  loginEndpoint = '/api/users/verify?code=';

  constructor(private service: BackendService) {
  }

  verify(code: string | null): Observable<string> {
    return this.service.get(this.api+this.loginEndpoint+code,{ responseType : 'text' })

  }
}
