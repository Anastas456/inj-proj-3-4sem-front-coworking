import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  token:any;
  username:any;

  constructor(private http: HttpClient) { }

  loginUser(userData: any): Observable<any>{
    return this.http.post('http://127.0.0.1:8000/users/login-user/', userData);
  }

  registerUser(userData:any): Observable<any>{
    return this.http.post('http://127.0.0.1:8000/users/register-user', userData);
  }

  storeUser(token, username){
    localStorage.setItem('token', token);
    localStorage.setItem('username', username);
    this.token=token;
    this.username=username;
  }

  logoutUser(){
    this.token=null;
    this.username=null;
    localStorage.clear();
  }

  isLoggedIn(){
    return tokenNotExpired();
  }
}
