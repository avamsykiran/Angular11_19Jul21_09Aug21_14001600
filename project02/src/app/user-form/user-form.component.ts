import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  user:User;

  constructor(private usrService:UsersService,private router:Router) { 
    this.user={id:0,fullName:'',password:'',emailId:''};
  }

  ngOnInit(): void {
  }

  addUser(){
    this.usrService.add(this.user);
    this.router.navigateByUrl("/list");
  }
}
