import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // Register url
  register_Url='http://localhost:3000/authenticate/register';

  // Login url
  login_Url='http://localhost:3000/authenticate/login';

  // Verify token
  token_Url='http://localhost:3000/authenticate/token';

  constructor(private httpClient: HttpClient, private router: Router) { }

  // Register user
  registerPostFunction(data: any) {
    return this.httpClient.post(this.register_Url, data);
  }

  // Login user
  loginPostFunction(data: any) {
    return this.httpClient.post(this.login_Url, data);
  }

  // Verify token
  verifyToken() {
    return this.httpClient.get(this.token_Url);
  }

  // Check token
  checkTokenPresent() {
    return !!localStorage.getItem('token');
  }

  // Retrive token
  getToken() {
    return localStorage.getItem('token');
  }

  // Logout btn
  logoutBtn() {
    localStorage.removeItem('token');
    this.router.navigate(['/signIn']);
  }

}
