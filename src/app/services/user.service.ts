import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {UserInfo} from '../model/user-info';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private insertUserInfoURL = 'http://localhost:8080/api/v1/user/insert';
  private userInfoObject: UserInfo;

  httpOptions = {
    // tslint:disable-next-line:max-line-length
    headers: new HttpHeaders({
      'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With, Accept' })
  };

  constructor(private http: HttpClient) { }

  addUserInfo(userInfo: UserInfo): Observable<UserInfo> {
    console.log('addUserInfo method was triggered');
    console.log(userInfo);
    return this.http.post<UserInfo>(this.insertUserInfoURL, userInfo, this.httpOptions);
  }
}
