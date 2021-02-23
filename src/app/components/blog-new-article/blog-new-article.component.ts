import { Component, OnInit } from '@angular/core';
import {Router}  from '@angular/router';
import {BlogService} from '../../services/blog.service';

@Component({
  selector: 'app-blog-new-article',
  templateUrl: './blog-new-article.component.html',
  styleUrls: ['./blog-new-article.component.css']
})
export class BlogNewArticleComponent implements OnInit {

  // Blog model
  myBlog= {
    author: '',
    title: '',
    description:''
  };

  constructor(private router: Router, private blogService: BlogService) { }

  ngOnInit(): void {
  }

  // Submit blog data
  submitData() {
    this.blogService.blogPostFunction(this.myBlog)
     .subscribe((response) => {
       console.log(response);
     });
     
    this.router.navigate(['/list']);
  }

}
