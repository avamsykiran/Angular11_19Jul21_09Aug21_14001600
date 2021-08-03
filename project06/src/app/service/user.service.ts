import { Injectable } from '@angular/core';
import { User } from '../shared/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getCurrentUser():User|null{
    let userData = sessionStorage.getItem("user");
    return userData?JSON.parse(userData):null;
  }

  isLoggedIn():boolean{
    return this.getCurrentUser()!=null;
  }

}
