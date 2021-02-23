import { Component, OnInit } from '@angular/core';
import {VegetableDataService} from '../vegetable-data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-order',
  templateUrl: './user-order.component.html',
  styleUrls: ['./user-order.component.css']
})
export class UserOrderComponent implements OnInit {

 timeElem=[2021, 2020, 2019, 2018, 2017, 2016];

 user_list= [
   {"url": "/assets/images/bg_3.jpg"},
   {"url": "/assets/images/category-3.jpg"},
   {"url": "/assets/images/miss.jpg"}
 ];

 vegetable_list= [
  {
    "id": 1,
    "title": "accusamus beatae ad facilis cum similique qui sunt",
    "url": "../assets/images/bg_3.jpg",
    "thumbnailUrl": "https://via.placeholder.com/150/92c952",
    "name": "quo vero reiciendis velit similique earum",
  "email": "Jayne_Kuhic@sydney.com",
  "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et",
  "productName": "Green Veggies",
  "price":50
  },
  
  {
    
    "id": 2,
    "title": "reprehenderit est deserunt velit ipsam",
    "url": "../assets/images/bg_2.jpg",
    "thumbnailUrl": "https://via.placeholder.com/150/771796",
    "name": "quo vero reiciendis velit similique earum",
  "email": "Jayne_Kuhic@sydney.com",
  "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et",
  "productName": "Basket of Joy",
  "price":50
  },
  {
   
    "id": 3,
    "title": "officia porro iure quia iusto qui ipsa ut modi",
    "url": "../assets/images/category-2.jpg",
    "thumbnailUrl": "https://via.placeholder.com/150/24f355",
    "name": "quo vero reiciendis velit similique earum",
  "email": "Jayne_Kuhic@sydney.com",
  "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et",
  "productName": "Stawberry",
  "price":50
  }
 ];

 constructor(private router: Router, private vegetableDataService: VegetableDataService) { }

 ngOnInit(): void {
  //  this.vegetableDataService.getVegetables().subscribe((data) => {
  //    this.vegetable_list= data;
  //  })
 }

}
