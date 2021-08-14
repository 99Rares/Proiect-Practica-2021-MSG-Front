import {Injectable} from '@angular/core';
import {BackendService} from "../../backend/backend.service";
import {LongUser, ShortUser} from "./model/users.data";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'http://localhost:8080/api/users/login';
  urlRegister = 'http://localhost:8080/api/users/register/'
  resetEndpoint = 'http://localhost:8080/api/users/reset'
  resetPasswordEndpoint='http://localhost:8080/api/users/reset/'
  getUserDetailsEndpoint = 'http://localhost:8080/api/users'
  updateUserDetailsEndpoint ='http://localhost:8080/api/users/updateUserDetails'


  constructor(private service: BackendService) {
  }

  login(user: ShortUser): Observable<LongUser> {
    return this.service.post(this.url, {
      email: user.username,
      password: user.password
    })
  }

  reset(email: string): Observable<void> {
    let port=window.location.port;
    console.log(`${this.resetEndpoint}/${email}`)
    return this.service.post(`${this.resetEndpoint}/${port}`,email);
  }
  //resetPasswordEndpoint='http://localhost:8080/api/users/reset/{code}/pass'
  resetPassword(password:string,code:string|null):Observable<void>{
    console.log(`${this.resetPasswordEndpoint}${code}/pass`)
    return this.service.post(`${this.resetPasswordEndpoint}${code}/pass`,password)
  }

  //register care primeste user cu toate field urile obs void
  register(user: LongUser): Observable<void> {
let port=window.location.port;
    return this.service.post(this.urlRegister+port ,{
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: user.password
    })
  }

  getUserDetails(id: number): Observable<LongUser> {
    return this.service.get(`${this.getUserDetailsEndpoint}/${id}`);
  }

  updateUser(user: LongUser): Observable<LongUser> {
    return this.service.put(`${this.updateUserDetailsEndpoint}`, user);
  }

}
