import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {BlogService} from '../../services/blog.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  // Blog data
  blog_Data: any= {
    author: '',
    title: '',
    description: ''
  };

  constructor(private activatedRoute: ActivatedRoute, private blogService: BlogService, private router: Router) { }

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

  // Update blog data
  updateData() {
    this.blogService.blogPutFunction(this.blog_Data)
     .subscribe((response) => {
       console.log(response);
       this.router.navigate(['/list']);
     })
  }

}
