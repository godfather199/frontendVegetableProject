import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  blogFunc1() {
    this.router.navigate(['/blog', 1]);
  }

  blogFunc2() {
    this.router.navigate(['/blog', 2]);
  }

  blogFunc3() {
    this.router.navigate(['/blog', 3]);
  }

  blogFunc4() {
    this.router.navigate(['/blog', 4]);
  }

}
