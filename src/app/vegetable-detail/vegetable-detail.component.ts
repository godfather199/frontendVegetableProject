import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import {VegetableDataService} from '../vegetable-data.service';
import {CartDataService} from '../cart-data.service';
import {CommentService} from '../service/comment.service';

@Component({
  selector: 'app-vegetable-detail',
  templateUrl: './vegetable-detail.component.html',
  styleUrls: ['./vegetable-detail.component.css']
})
export class VegetableDetailComponent implements OnInit {

  currentId: any;
  container: any;

  counter=1;
  counter_modal=1;
  isAlive=true;

  vegetable_data=[];

  // Modal Image Array
  img_storage= [
   {"id": 1,"img_url":"assets/images/category-2.jpg", "product": "Stawberry"},
   {"id": 2,"img_url":"assets/images/product-5.jpg", "product": "Tomato"},
   {"id": 3,"img_url":"assets/images/product-7.jpg", "product": "Baby Carrot"},
   {"id": 4,"img_url":"assets/images/product-3.jpg", "product": "Green Beans"}
  ];

  // Comment section dummy-data
  // comment_Array= [
  //   {
  //     "name": "Roshan Kumar",
  //     "title": "I got a broken product",
  //     "comment": "They have two separate water inject for wash and rinse. Its too cumbersome to change it again and again . I am using other model of whirlpool for more than 10yrs and saw this for the first time."
  //   },
  //   {
  //     "name": "Ankur Mishra",
  //     "title": "Good machine with awesome price....",
  //     "comment": "They have two separate water inject for wash and rinse. Its too cumbersome to change it again and again . I am using other model of whirlpool for more than 10yrs and saw this for the first time."
  //   },
  //   {
  //     "name": "	Dr. Ghanshyam",
  //     "title": "	Dr. Ghanshyam",
  //     "comment": "Minus star for product delivered as it is having detergent stains in washing tub which clearly indicates used product. Cable found damaged. See images attached. Every time you have to detach and attach water inlet pipe for spin and wash program. Few have physical switch to divert the water flow. Even on highly flat surface it is not setting down properly.. It must me returned by someone for this issue only. I will check for 3 to 4 days and return it. Amazon is loosing faith day by day.."
  //   }
  // ]

  comment_Array: any='';

  // Comment section object
  myUserComment= {
    name: '',
    title: '',
    comment: ''
  };

  hide_element= false;
  cart_Array=[];
  // Show/hide comment button
  comment_hide_button= true;
  data_Posted= true;

  constructor(private route: ActivatedRoute, private vegetableDataService: VegetableDataService, private router: Router, private cartDataService: CartDataService, private commentService: CommentService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: any) => {
      let id=parseInt(params.get('id'));
      this.currentId= id;
       this.counter=1; 

     this.vegetableDataService.getVegetables().subscribe((data) => {
       const store= data;

       this.container= store.find((value) => {
         return value.id === this.currentId;
       });
     }); 
    });

    this.displayCommentData();

    }

    goBack() {
     this.router.navigate(['/vegetable']);
    }

    goPrevious() {
      let previousId= this.currentId - 1;
      this.router.navigate(['/vegetable', previousId]);
    }

    goNext() {
      let nextId= this.currentId +1;
      this.router.navigate(['/vegetable', nextId]);
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

    // Add data
    commentData(data: any) {
      this.data_Posted= false;
      this.commentService.postFunction(this.myUserComment).subscribe((data) => {
        this.displayCommentData();
      });
      data.resetForm();
    }

    // Get data
    displayCommentData() {
      this.commentService.getFunction().subscribe((data) => {
        this.comment_Array= data;
      });
    }
    
    // Edit data
    editData(data: any) {
      this.comment_hide_button= false;
      this.myUserComment= data;
      this.data_Posted= true;
    }

    // Update data
    updateData(data: any) {
      this.comment_hide_button= true;
      this.commentService.putFunction(this.myUserComment).subscribe(() => {
        this.displayCommentData();
        alert('Your Comment Has Been Updated')
      })
      data.resetForm();
    }

    // Delete data
    deleteData(data: any) {
      this.commentService.deleteFunction(data).subscribe((store) => {
        this.displayCommentData();
        alert('Your Comment Has Been Deleted');
      })
    }

    displayForm() {
      this.data_Posted= true;
    }

}




