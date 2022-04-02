import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GauthguardGuard implements CanActivate {
  local: string | null=null;
  constructor(private route:Router){
    console.log("authguard is callled")
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // return true;
    this.local=localStorage.getItem("admintoken");
    if((this.local != undefined)&&(this.local != null)){
      return true;
    }
    return false
  }
  
}
