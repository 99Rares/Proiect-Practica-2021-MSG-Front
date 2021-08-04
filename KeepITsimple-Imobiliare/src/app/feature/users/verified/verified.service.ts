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
    console.log(this.api+this.loginEndpoint+code)
    console.log(this.service.get(this.api+this.loginEndpoint+code))
    return this.service.get(this.api+this.loginEndpoint+code,{ responseType : 'text' })

  }
}
