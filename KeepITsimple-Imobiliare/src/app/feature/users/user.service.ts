import { Injectable } from '@angular/core';
import {BackendService} from "../../backend/backend.service";
import {LongUser, ShortUser} from "./model/users.data";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'http://localhost:8080/api/users/login';
  urlRegister = 'http://localhost:8080/api/users/register'

  constructor(private service: BackendService) {}

  login(user: ShortUser): Observable<LongUser> {
    return this.service.post(this.url, {
      email: user.username,
      password: user.password
    })
  }

  //register care primeste user cu toate field urile obs void
  register(user: LongUser): Observable<void>{

    return this.service.post(this.urlRegister,{
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: user.password
    })
  }
}
