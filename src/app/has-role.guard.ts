import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from "@angular/router";
import { Observable } from "rxjs";

@Injectable()
export class HasRoleGuard implements CanActivate {
    constructor(){}

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
      ):
        | Observable<boolean | UrlTree>
        | Promise<boolean | UrlTree>
        | boolean
        | UrlTree {
            return this.isAuthorized(route);
        }

    isAuthorized(route: ActivatedRouteSnapshot): boolean{
        const expectedRoles = route.data.expectedRole;
        const roleMatches = localStorage.getItem('role').includes(expectedRoles)
        return roleMatches
    }
}