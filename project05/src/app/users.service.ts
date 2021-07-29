import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './model/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  userApi:string;

  constructor(private httpClient:HttpClient) {
    this.userApi="http://localhost:9999/users";
  }

  getAll():Observable<User[]>{
    return this.httpClient.get<User[]>(this.userApi);
  }

  getById(id:number):Observable<User>{
    return this.httpClient.get<User>(`${this.userApi}/${id}`);
  }

  add(user:User):Observable<User>{
    return this.httpClient.post<User>(this.userApi,user);
  }

  delUser(id:number):Observable<void>{
    return this.httpClient.delete<void>(`${this.userApi}/${id}`);
  }

  modify(user:User):Observable<User>{
    return this.httpClient.put<User>(`${this.userApi}/${user.id}`,user);
  }
}
