import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../shared/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  USER_API:string;

  constructor(private http : HttpClient) { 
    this.USER_API=environment.usersApi;
  }

  register(user:User):Observable<User>{
    return this.http.post<User>(this.USER_API,user);
  }

  getCurrentUser():User|null{
    let userData = sessionStorage.getItem("user");
    return userData?JSON.parse(userData):null;
  }

  isLoggedIn():boolean{
    return this.getCurrentUser()!=null;
  }

}
