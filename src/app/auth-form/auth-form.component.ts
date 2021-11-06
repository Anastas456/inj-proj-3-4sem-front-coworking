import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css']
})
export class AuthFormComponent implements OnInit {

  auth;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.auth={
      username:'',
      password:''
    };
  }

  authUser(){
    this.userService.loginUser(this.auth).subscribe(
      response => {
        console.log(response);
        alert('Пользователь '+ this.auth.username + ' залогинился');
      },
      error =>{
        console.log(error);
      }
    )
  }

}
