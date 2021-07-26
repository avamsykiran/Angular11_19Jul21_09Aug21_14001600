import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users:User[];

  constructor(private usersService:UsersService) { 
    this.users=usersService.getAll();
  }

  ngOnInit(): void {
  }

}
