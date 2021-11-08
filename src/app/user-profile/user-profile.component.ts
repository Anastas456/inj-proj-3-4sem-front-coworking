import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  
  constructor(private userService:UserService,
      private router: Router) { }

  ngOnInit(): void {
  }

  onLogoutUser(){
    this.userService.logoutUser();
    this.router.navigate(['/auth-form'])
  }

}
