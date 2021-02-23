import { Component, OnInit } from '@angular/core';
import {CartDataService} from '../cart-data.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {

  container: any;
  subTotal: any;
  total_Items: any;
  show_hide= false;

  constructor(private cartDataService: CartDataService) { }

  ngOnInit(): void {
    this.displayData();
  }

  deleteData(data :any) {
    this.cartDataService.deleteUserData(data).subscribe(() => {
      this.displayData();
    });
   
  }

  displayData() {
    this.cartDataService.getData().subscribe((data) => {
      this.container= data;
      this.calcTotal();
    //   var  total=0;
    //     this.container.forEach((value) => {
    //        total=total+(value.totalItems) * (value.currentProduct.price);
    //     });
    //     this.subTotal=total;
    //     if(this.subTotal >= 500) {
    //       this.show_hide=true;
    //     }
    //     else {
    //       this.show_hide= false;
    //     }
    });
   
  }

  calcTotal() {
    var  total=0;
    var items=0;
    this.container.forEach((value: any) => {
       total=total+(value.totalItems) * (value.currentProduct.price);
       items=items+value.totalItems;
    });
    this.subTotal=total;
    this.total_Items= items;

    if(this.subTotal >= 500) {
      this.show_hide=true;
    }
    else {
      this.show_hide=false;
    }
  }

  // Save-Later page
  saveLater(data: any) {
    this.cartDataService.saveLaterPostFunction(data)
     .subscribe((response) => {
       console.log(response);
     });

     this.deleteData(data);
  }

  // container;

  // constructor(private cartDataService: CartDataService) { }

  // ngOnInit(): void {
  //   this.container= this.cartDataService.cart_data;
  // }

}
