import { Component, OnInit } from '@angular/core';
import {CartDataService} from '../cart-data.service';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

declare const L: any;

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  container: any=[];
  sub_Total :any;

  constructor(private cartDataService: CartDataService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {

    this.authService.verifyToken()
     .subscribe((data) => {
       console.log(data);
     }, (err) => {
       console.log(err);
       this.router.navigate(['/signIn']);
     })

    this.cartData();
  }

  cartData() {
    this.cartDataService.getData().subscribe((data) => {
      this.container= data;

      var  total=0;
      this.container.forEach((value: any) => {
         total=total+(value.totalItems) * (value.currentProduct.price);
      });
      this.sub_Total=total;
    });
  }

}
