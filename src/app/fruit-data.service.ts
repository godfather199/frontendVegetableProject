import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FruitDataService {

  url='/assets/data/fruit_data.json';

  constructor(private http: HttpClient) { }

  getFruits():Observable<any[]> {
   return this.http.get<any[]>(this.url);
  }
}
