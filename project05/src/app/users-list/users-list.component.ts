import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../model/user';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users:User[];
  errMsg?:string;
  msg?:string;

  constructor(private usersService:UsersService,private activatedRoute:ActivatedRoute) { 
    this.users=[];
  }

  ngOnInit(): void {
    this.msg = this.activatedRoute.snapshot.queryParams.msg;
    this.usersService.getAll().subscribe(
      (data) => this.users=data,
      (err)=>{console.log(err);this.errMsg="Unable to load users list";}
    );
  }

  delete(id:number){
    this.usersService.delUser(id).subscribe(
      () => this.users = this.users.filter(u => u.id!==id),
      (err) => {console.log(err); this.errMsg="Unable to delete the user";}
    );
  }

  closeMsgBox(){
    this.msg=undefined;
  }
  closeErrMsgBox(){
    this.errMsg=undefined;
  }
}
