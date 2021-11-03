import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css'],
  providers:[UserService]
})
export class RegisterPageComponent implements OnInit {

  register;

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.register={
      username: '',
      password: '',
      email: ''
    };
  }

  registerUser(){
    this.userService.registerNewUser(this.register).subscribe(
      response =>{
        alert('Пользователь' + this.register.username + ' был успешно создан!');
      },
      error => console.log('error', error)
    );
  }

}
