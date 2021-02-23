import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {BlogDataService} from '../blog-data.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {

  currentId: any;
  container: any;
  constructor(private activatedRoute: ActivatedRoute, private blogDataService: BlogDataService) { }

  ngOnInit(): void {

   this.activatedRoute.paramMap.subscribe((params: any) => {
     this.currentId= parseInt(params.get('id'));

   this.blogDataService.getBlog().subscribe((data) => {
     const store= data;

   this.container= store.find((value) => {
     return value.id === this.currentId;
   });

   });

   });

  }

}
