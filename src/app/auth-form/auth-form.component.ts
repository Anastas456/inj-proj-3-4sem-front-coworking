import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css']
})
export class AuthFormComponent implements OnInit {

  auth;

  constructor(private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
    this.auth={
      email:'',
      password:''
    };
  }

  authUser(){
    this.userService.loginUser(this.auth).subscribe(
      response => {
        console.log(response);
        // alert('Пользователь '+ this.auth.username + ' залогинился');
        this.router.navigate(['/user-profile']);
        this.userService.storeUser(response.token, response.username) //передать через response все остальное

      },
      error =>{
        console.log(error);
        alert('Возможно был введен неправильный логин и пароль. Пожалуйста, попробуйте снова.');
      }
    )
  }

}
