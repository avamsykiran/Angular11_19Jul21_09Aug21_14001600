import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../shared/user';
import { map,first,tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  USER_API:string;

  constructor(private http : HttpClient) { 
    this.USER_API=environment.usersApi;
  }

  getAll():Observable<User[]>{
    return this.http.get<User[]>(this.USER_API);
  }

  register(user:User):Observable<User>{
    return this.http.post<User>(this.USER_API,user);
  }

  login(email:string,password:string):Observable<User>{
    return this.http.get<User[]>(`${this.USER_API}?email=${email}`).pipe(
      map(users => users[0]),
      first(u => u.password===password),
      tap(user => sessionStorage.setItem("user",JSON.stringify({...user,password:undefined})))
    )
  }

  logout(){
    sessionStorage.removeItem("user");
    sessionStorage.clear();
  }

  getCurrentUser():User|null{
    let userData = sessionStorage.getItem("user");
    return userData?JSON.parse(userData):null;
  }

  isLoggedIn():boolean{
    return this.getCurrentUser()!=null;
  }

}
