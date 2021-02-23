import { Component, OnInit } from '@angular/core';
import {VegetableDataService} from '../vegetable-data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})
export class UserAccountComponent implements OnInit {

  vegetable_list: any= [];

  constructor(private vegetableDataService: VegetableDataService, private router: Router) { }

  ngOnInit(): void {
   this.vegetableDataService.getVegetables().subscribe((data) => {
     this.vegetable_list= data;
   });
  }

  goToLogin() {
    this.router.navigate(['/signIn']);
  }

  goToOrder() {
    this.router.navigate(['/userOrder']);
  }

}
