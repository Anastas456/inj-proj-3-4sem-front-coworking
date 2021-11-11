import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  username:any;
  first_name:any;
  last_name:any;
  role:any;

  constructor(private userService:UserService,
      private router: Router) { }

  ngOnInit(): void {
    this.username=localStorage.getItem('username');
    this.first_name=localStorage.getItem('first_name');
    this.last_name=localStorage.getItem('last_name');
    this.role=localStorage.getItem('role');
  }

  onLogoutUser(){
    this.userService.logoutUser();
    this.router.navigate(['/auth-form'])
  }

}
