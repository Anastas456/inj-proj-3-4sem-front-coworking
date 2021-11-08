import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

  reg;

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.reg={
      username:'',
      email:'',
      first_name:'',
      last_name:'',
      password:'',
    }
  }

  regUser(){
    this.userService.registerUser(this.reg).subscribe(
      response => {
        console.log(response);
        alert('Пользователь зарегистрирован');

      },
      error =>{
        console.log(error);
      }
    )
  }

}
