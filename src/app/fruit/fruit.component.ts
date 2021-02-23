import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FruitDataService} from '../fruit-data.service';

@Component({
  selector: 'app-fruit',
  templateUrl: './fruit.component.html',
  styleUrls: ['./fruit.component.css']
})
export class FruitComponent implements OnInit {

  vegetable_list: any;
  constructor(private router: Router, private fruitDataService: FruitDataService) { }

  ngOnInit(): void {
    this.fruitDataService.getFruits().subscribe((data) => {
      this.vegetable_list= data;
    })
  }

  vegDetails(vegetable: any) {
    this.router.navigate(['/fruit', vegetable.id]);
  }


}
