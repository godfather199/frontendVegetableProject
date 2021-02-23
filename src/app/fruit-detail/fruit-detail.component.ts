import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import {FruitDataService} from '../fruit-data.service';
import {CartDataService} from '../cart-data.service';

@Component({
  selector: 'app-fruit-detail',
  templateUrl: './fruit-detail.component.html',
  styleUrls: ['./fruit-detail.component.css']
})
export class FruitDetailComponent implements OnInit {

  currentId: any;
  container: any;

  counter=1;
  counter_modal=1;
  isAlive=true;

  vegetable_data=[];

  img_storage= [
   {"id": 1,"img_url":"assets/images/kiwi.jpg", "product": "Kiwi"},
   {"id": 2,"img_url":"assets/images/stawberry.jpg", "product": "Stawberry"},
   {"id": 3,"img_url":"assets/images/berry.jpg", "product": "Berry"},
   {"id": 4,"img_url":"assets/images/dragon_fruit.jpg", "product": "Dragon Fruit"}
  ];

  hide_element= false;
  cart_Array=[];

  constructor(private route: ActivatedRoute, private fruitDataService: FruitDataService, private router: Router, private cartDataService: CartDataService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: any) => {
      let id=parseInt(params.get('id'));
      this.currentId= id;
       this.counter=1; 

     this.fruitDataService.getFruits().subscribe((data) => {
       const store= data;

       this.container= store.find((value) => {
         return value.id === this.currentId;
       });
     }); 
    });

    }

    goBack() {
     this.router.navigate(['/fruit']);
    }

    goPrevious() {
      let previousId= this.currentId - 1;
      this.router.navigate(['/fruit', previousId]);
    }

    goNext() {
      let nextId= this.currentId +1;
      this.router.navigate(['/fruit', nextId]);
    }

    counterMinus() {
      if(this.counter >1) {
        this.counter=this.counter-1;
      }
    }

      
    counterPlus() {
        this.counter=this.counter+1;
    }

    counterMinus_modal() {
      if(this.counter_modal > 1) {
        this.counter_modal= this.counter_modal - 1;
      }
    }

    counterPlus_modal() {
      this.counter_modal= this.counter_modal + 1;
    }

    cart_btn() {
      this.isAlive= !this.isAlive;
    }

    
    check_input(data: any) {
      if(data!==  null) {
       this.hide_element= true;
      }
      if(data == '') {
        this.hide_element= false;
      }
    }

    cartFunction() {
      // let totalItems= this.counter;
      // let currentProduct= this.container;

      let productObj= {
        'totalItems': this.counter,
        'currentProduct': this.container
      };

      this.cartDataService.addData(productObj).subscribe(() => {

      });

      alert(this.counter+' items added to the cart');

      // this.cart_Array.push(productObj);
      //  Get this.counter and current window object
      //  push the object in the Array
      //  export the Array
      //  make show cart component
      //  import the Array
      //  iterate the array and display appropriate data

    }

    // cartItems() {
    //   this.cartDataService.storeData(this.cart_Array);
    //   this.router.navigate(['/cartPage']);
    // }

    cartItems() {
      this.router.navigate(['/cartPage']);
    }
}
