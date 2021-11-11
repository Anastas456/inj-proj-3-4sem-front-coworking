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
  first_name:any;
  last_name:any;
  role:any;

  constructor(private http: HttpClient) { }

  loginUser(userData: any): Observable<any>{
    return this.http.post('http://127.0.0.1:8000/users/login-user/', userData);
  }

  registerUser(userData:any): Observable<any>{
    return this.http.post('http://127.0.0.1:8000/users/register-user', userData);
  }

  storeUser(token, username, first_name, last_name, role){
    localStorage.setItem('token', token);
    localStorage.setItem('username', username);
    localStorage.setItem('first_name', first_name);
    localStorage.setItem('last_name', last_name);
    localStorage.setItem('role', role);
    this.token=token;
    this.username=username;
    this.first_name=first_name;
    this.last_name=last_name;
    this.role=role;
  }

  returnRole(){
    return localStorage.getItem('role')
  }

  logoutUser(){
    this.token=null;
    this.username=null;
    this.first_name=null;
    this.last_name=null;
    this.role=null;
    localStorage.clear();
  }

  isLoggedIn(){
    return tokenNotExpired();
  }
}
