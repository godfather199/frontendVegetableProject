import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {VegetableDataService} from '../vegetable-data.service';

@Component({
  selector: 'app-vegetable',
  templateUrl: './vegetable.component.html',
  styleUrls: ['./vegetable.component.css']
})
export class VegetableComponent implements OnInit {

  vegetable_list: any;
  constructor(private router: Router, private vegetableDataService: VegetableDataService) { }

  ngOnInit(): void {
    this.vegetableDataService.getVegetables().subscribe((data) => {
      this.vegetable_list= data;
    })
  }

  vegDetails(vegetable: any) {
    this.router.navigate(['/vegetable', vegetable.id]);
  }

}
