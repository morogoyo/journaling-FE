import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
})
export class UserInfoComponent implements OnInit {

  constructor(private fb: FormBuilder, private httpService: UserService) { }

  registrationForm = this.fb.group({
    fname: [''],
    lname: [''],
    userName: [''],
    password: [''],
    streetAddress: [''],
    city: [''],
    state: [''],
    zipcode: [''],
    dateOfBirth: [''],
    gender: [''],
    email: ['']
  });

  testVariable = [];

  onSubmit() {
    // console.warn(this.registrationForm.value);
    this.httpService.addUserInfo(this.registrationForm.value).subscribe(d => console.log('Created User'),
                                                                    error => { console.log(error); });
  }

  ngOnInit() {
  }
}
