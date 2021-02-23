import { Component, OnInit } from '@angular/core';
import {CartDataService} from '../cart-data.service';

@Component({
  selector: 'app-save-later',
  templateUrl: './save-later.component.html',
  styleUrls: ['./save-later.component.css']
})
export class SaveLaterComponent implements OnInit {

  // Array for saveLater data
  container: any= [];

  constructor(private cartDataService: CartDataService) { }

  ngOnInit(): void {
    this.displaySaveLaterData();
  }

  // Display data
  displaySaveLaterData() {
    this.cartDataService.saveLaterGetFunction()
     .subscribe((response) => {
       this.container= response;
     })
  }

  // Add To Cart
  addToCart(data: any) {
    this.cartDataService.addData(data)
     .subscribe((response) => {
       console.log(response);
     });

    this.cartDataService.saveLaterDeleteFunction(data)
     .subscribe((store) => {
       console.log(store);
       this.displaySaveLaterData();
     });

  }

}
