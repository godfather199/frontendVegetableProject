import { Component, OnInit } from '@angular/core';
import {BlogService} from '../../services/blog.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {

  // Blog data
  blog_Data_Array: any;

  constructor(private blogService: BlogService, private router: Router) { }

  ngOnInit(): void {
    this.displayBlog();
  }

  // Get all blog data
  displayBlog() {
    this.blogService.blogGetFunction()
     .subscribe((response) => {
       this.blog_Data_Array= response;
     })
  }

  // Full article
  fullArticle(data: any) {
    this.router.navigate(['/detail', {id: data._id}]);
  }

  // Edit article
  editArticle(data: any) {
    this.router.navigate(['/edit', {id: data._id}]);
  }

  // Delete article
  deleteArticle(data: any) {
    this.blogService.blogDeleteFunction(data)
     .subscribe((response) => {
       console.log(response);
       this.displayBlog();
     });
  }

}
