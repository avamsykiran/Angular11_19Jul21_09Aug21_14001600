import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../model/user';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  userForm: FormGroup;

  uidFC: FormControl;
  unmFC: FormControl;
  pwdFC: FormControl;
  eidFC: FormControl;

  errMsg?: string;

  isEdit: boolean;

  constructor(private usrService: UsersService, private router: Router, private activatedRoute: ActivatedRoute) {

    this.uidFC = new FormControl(0, [Validators.required, Validators.min(1)])
    this.unmFC = new FormControl("", [Validators.required, Validators.minLength(5), Validators.maxLength(45)])
    this.pwdFC = new FormControl("", [Validators.required, Validators.minLength(4)])
    this.eidFC = new FormControl("", [Validators.required, Validators.email])

    this.userForm = new FormGroup({ id: this.uidFC, fullName: this.unmFC, password: this.pwdFC, emailId: this.eidFC });

    this.isEdit = false;
  }

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.params.id;
  
    if (id) {
      this.isEdit = true;
      this.usrService.getById(id).subscribe(
        (user) => this.userForm.setValue(user),
        (err) => { console.log(err); this.errMsg = "Unable to load requested data" }
      );
    }
  }

  addUser() {
    let obr = null;
    
    if (this.isEdit)
      obr = this.usrService.modify(this.userForm.value);
    else
      obr = this.usrService.add(this.userForm.value);

    obr.subscribe(
      (user) => this.router.navigate(['/list'],{queryParams:{msg:`User#${user.id} is saved successfully`}}),
      (err) => { console.log(err); this.errMsg = "Unable to save data" }
    );

  }
}
