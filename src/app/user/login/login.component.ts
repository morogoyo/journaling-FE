import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {LoginService} from '../../services/logingService/login.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

    constructor(private fb: FormBuilder, private httpService: LoginService) {
    }

    // todo this component will need a ssl certificate
    loginForm = this.fb.group({

        userName: [''],
        password: ['']

    });

    onSubmit() {
        // console.warn(this.registrationForm.value);
        this.httpService.userLogin(this.loginForm.value).subscribe(d => console.log('logged-in User'));
    }

    ngOnInit() {
    }

}
