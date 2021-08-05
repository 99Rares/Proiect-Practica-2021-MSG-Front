import { Injectable } from '@angular/core';
import {LongUser} from "../users/model/users.data";

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }

  signOut() {
    window.sessionStorage.clear();
  }

  public saveToken(token: string) {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken() {
    return sessionStorage.getItem(TOKEN_KEY);
  }

  public saveUser(user:LongUser) {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser() {
    const item = sessionStorage.getItem(USER_KEY);
    if(item){
      //return JSON.parse(item);
      let user = JSON.parse(item);
      return user.fullName;
    }

    return null;
  }
}
