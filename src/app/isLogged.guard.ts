import { Injectable } from "@angular/core";
import { Router, CanActivate } from "@angular/router";
import { UserService } from './shared/services/user.service';

@Injectable()
export class isLoggedIn implements CanActivate {
    constructor(private userService: UserService,
        private router: Router){}

    canActivate(){
        if (this.userService.isLoggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/auth-form'])
            return false;
        }
    }
}