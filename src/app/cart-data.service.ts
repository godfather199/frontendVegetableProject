import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartDataService {

  // url='http://localhost:3000/users/';

  url='http://localhost:3000/vegetableDetail';

  // SaveLater url
  saveLater_Url='http://localhost:3000/saveLater';

  constructor(private httpClient: HttpClient) {}

  addData(data: any) {
    return this.httpClient.post(this.url, data);
  }

  getData() {
    return this.httpClient.get(this.url);
  }

  deleteUserData(data: any) {
    return this.httpClient.delete('http://localhost:3000/vegetableDetail/'+data._id);
  }

  // Add to saveLater
  saveLaterPostFunction(data: any) {
    return this.httpClient.post(this.saveLater_Url, data);
  }

  // Get saveLater data
  saveLaterGetFunction() {
    return this.httpClient.get(this.saveLater_Url);
  }

  // Delete saveLater data
  saveLaterDeleteFunction(data: any) {
    return this.httpClient.delete('http://localhost:3000/saveLater/'+data._id);
  }

  // cart_data;

  // constructor() { }

  // storeData(data) {
  //   this.cart_data=data;
  //   return;
  // }

}
