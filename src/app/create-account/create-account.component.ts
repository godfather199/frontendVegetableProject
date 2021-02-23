import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  myUser= {
    userName: '',
    phone: '',
    email: '',
    address: '',
    password: ''
  };

  // Register text
  text_Register= '';
  show_hide_Register= false;

  // Error text
  text_Error= '';
  show_hide_Error= false;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  // Submit user data
  submitData(data: NgForm) {
    this.authService.registerPostFunction(this.myUser)
     .subscribe((response: any) => {
       console.log(response);
      //  localStorage.setItem('token', response.token);
       this.show_hide_Register= true;
       this.text_Register= 'User Registered';
       data.resetForm();
     }, (err) => {
       console.log(err);
       this.show_hide_Error= true;
       this.text_Error= err.error;
       data.resetForm();
     })
  }

}
