import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private httpClient: HttpClient) { }

  // Add data
  postFunction(data: any) {
    return this.httpClient.post('http://localhost:3000/commentSection', data);
  }

  // Get data
  getFunction() {
    return this.httpClient.get('http://localhost:3000/commentSection');
  }

  // Update data
  putFunction(data: any) {
    return this.httpClient.put('http://localhost:3000/commentSection/'+data._id, data);
  }

  // Delete data
  deleteFunction(data: any) {
    return this.httpClient.delete('http://localhost:3000/commentSection/'+data._id);
  }

}
