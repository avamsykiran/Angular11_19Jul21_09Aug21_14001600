import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { UserService } from '../service/user.service';
import { User } from '../shared/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  title:string;
  links?:string[][];

  users:User[];
  errMsg?:string;
  
  constructor(private userService:UserService,private router:Router) {
    this.title=environment.title;
    this.users=[];
  }

  ngOnInit(): void {
    this.userService.getAll().subscribe(
      data => this.users=data,
      err=>this.errMsg="Unable to laod users list"
    );
  }

  logout(){
    this.userService.logout();
    this.router.navigateByUrl("/home");
  }
}
