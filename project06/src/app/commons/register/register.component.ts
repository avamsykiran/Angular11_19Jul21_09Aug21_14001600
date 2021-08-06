import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { User } from 'src/app/shared/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  regForm: FormGroup;

  fnm: FormControl;
  eid: FormControl;
  pwd: FormControl;

  msg?: string;
  errMsg?: string;

  constructor(private userService: UserService, private router: Router) {
    this.fnm = new FormControl("", [Validators.required, Validators.minLength(5), Validators.maxLength(50)])
    this.eid = new FormControl("", [Validators.required, Validators.minLength(5), Validators.maxLength(50), Validators.email])
    this.pwd = new FormControl("", [Validators.required, Validators.minLength(5), Validators.maxLength(50)])

    this.regForm = new FormGroup({
      fullName: this.fnm, email: this.eid, password: this.pwd
    });
  }

  ngOnInit(): void {
  }

  register() {
    let user: User = { ...this.regForm.value, role: "USER" };
    this.userService.register(user).subscribe(
      (user) => {
        this.msg = `User#${user.id} got registered`;
        this.regForm.reset();
      },
      (err) => this.errMsg = "Registration could not complete. Please retry later."
    );
  }
}
