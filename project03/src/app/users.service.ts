import { Injectable } from '@angular/core';
import { User } from './model/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users: User[];

  constructor() {
    this.users = [
      {id:1,fullName:"Vamsy Kiran Aripaka",password:"",emailId:"vamsy.kiran@iiht.com"},
      {id:2,fullName:"Suseela Aripaka",password:"",emailId:"a.suseela.it@gmail.com"},
      {id:3,fullName:"Indhikaa Aripaka",password:"",emailId:"indhikaa@gmail.com"}
    ];
  }

  getAll():User[]{
    return this.users;
  }

  getById(id:number):User | undefined{
    return this.users.find(u => u.id===id);
  }

  add(user:User){
    this.users.push(user);    
  }

  delUser(id:number){
    let index = this.users.findIndex(u=>u.id===id);
    if(index>-1)
      this.users.splice(index,1);
  }

  modify(user:User){
    let index = this.users.findIndex(u=>u.id===user.id);
    if(index>-1)
      this.users[index]=user;
  }
}
