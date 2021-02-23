import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-page',
  templateUrl: './message-page.component.html',
  styleUrls: ['./message-page.component.css']
})
export class MessagePageComponent implements OnInit {

  date: any='';

  constructor() { }

  ngOnInit(): void {
    this.date= new Date();
    this.date.setDate(this.date.getDate()+7);
  }

}
