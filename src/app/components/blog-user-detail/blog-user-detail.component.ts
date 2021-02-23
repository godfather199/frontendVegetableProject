import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {BlogService} from '../../services/blog.service';

@Component({
  selector: 'app-blog-user-detail',
  templateUrl: './blog-user-detail.component.html',
  styleUrls: ['./blog-user-detail.component.css']
})
export class BlogUserDetailComponent implements OnInit {

   // Blog data
   blog_Data: any;

   constructor(private activatedRoute: ActivatedRoute, private blogService: BlogService) { }
 
   ngOnInit(): void {
     this.activatedRoute.paramMap
      .subscribe((data: ParamMap) => {
        this.blogData(data.get('id'));
      });
   }
 
   // Get blog data
   blogData(info: any) {
     this.blogService.blogGetSingleFunction(info)
      .subscribe((store) => {
        this.blog_Data= store;
      });
   }

}
