import { Injectable } from '@angular/core';
import {BackendService} from "../../backend/backend.service";
import {ShortUser} from "./model/users.data";
import {Observable} from "rxjs";
import {FormGroup} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'http://localhost:8080/api/users/login';

  constructor(private service: BackendService) {}

  login(user: ShortUser): Observable<boolean> {
    return this.service.post(this.url, {
      email: user.username,
      password: user.password
    })
  }

  //register care primeste user cu toate field urile obs void
}
