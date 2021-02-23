import { Injectable, ɵDEFAULT_LOCALE_ID } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  // Blog url
  blog_Url='http://localhost:3000/blog';

  constructor(private httpClient: HttpClient) { }

  // Add blog data
  blogPostFunction(data: any) {
    return this.httpClient.post(this.blog_Url, data);
  }

  // Get all blog data
  blogGetFunction() {
    return this.httpClient.get(this.blog_Url);
  }

  // Get single data
  blogGetSingleFunction(data: any) {
    return this.httpClient.get('http://localhost:3000/blog/'+data);
  }

  // Update blog data
  blogPutFunction(data: any) {
    return this.httpClient.put('http://localhost:3000/blog/'+data._id, data);
  }

  // Delete blog data
  blogDeleteFunction(data: any) {
    return this.httpClient.delete('http://localhost:3000/blog/'+data._id);
  }

}
