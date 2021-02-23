import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-sign-in',
  templateUrl: './login-sign-in.component.html',
  styleUrls: ['./login-sign-in.component.css']
})
export class LoginSignInComponent implements OnInit {

  myUser= {
    email:'',
    password: ''
  };

  // Error text
  text_Error= '';
  hide_show_Error= false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  // Submit user data
  submitData(data: NgForm) {
    this.authService.loginPostFunction(this.myUser)
     .subscribe((response: any) => {
       console.log(response);
       localStorage.setItem('token', response.token);
       this.router.navigate(['/checkout']);
       data.resetForm();
     }, (err) => {
       console.log(err);
       this.text_Error= err.error;
       this.hide_show_Error= true;
       data.resetForm();
     })
  }

}
