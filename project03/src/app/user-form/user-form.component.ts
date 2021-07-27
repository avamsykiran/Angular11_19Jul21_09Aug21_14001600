import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  userForm:FormGroup;

  uidFC:FormControl;
  unmFC:FormControl;
  pwdFC:FormControl;
  eidFC:FormControl;

  constructor(private usrService:UsersService,private router:Router) { 

    this.uidFC=new FormControl(0,[Validators.required,Validators.min(1)])
    this.unmFC=new FormControl("",[Validators.required,Validators.minLength(5),Validators.maxLength(45)])
    this.pwdFC=new FormControl("",[Validators.required,Validators.minLength(4)])
    this.eidFC=new FormControl("",[Validators.required,Validators.email])

    this.userForm=new FormGroup({id:this.uidFC,fullName:this.unmFC,password:this.pwdFC,emailId:this.eidFC});
  }

  ngOnInit(): void {
  }

  addUser(){
    this.usrService.add(this.userForm.value);
    this.router.navigateByUrl("/list");
  }
}
