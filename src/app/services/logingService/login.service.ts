import { Injectable } from '@angular/core';
import {UserInfo} from '../../model/user-info';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private userLoginURL = 'http://localhost:8080/authenticate'; // todo: check for backend url jwt
  private userInfoObject: UserInfo;

  httpOptions = {
    // tslint:disable-next-line:max-line-length
    headers: new HttpHeaders({
      'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With, Accept' })
  };

  constructor(private http: HttpClient) { }

  userLogin(userLogin: UserInfo): Observable<UserInfo> {
    console.log('userLogin method was triggered');
    console.log(userLogin);
    return this.http.post<UserInfo>(this.userLoginURL, userLogin, this.httpOptions);
  }
}
