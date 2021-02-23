import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private authService: AuthService, private router: Router) {}

  // Interface method
  canActivate(): boolean {
    if(this.authService.checkTokenPresent()) {
      return true;
    }
    else {
      this.router.navigate(['/signIn']);
      return false;
    }
  }
  
}
