import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-biz-driver',
  templateUrl: './my-biz-driver.component.html',
  styleUrls: ['./my-biz-driver.component.css']
})
export class MyBizDriverComponent implements OnInit {
  edit = true;
  val = 3.7;
  constructor() { }

  ngOnInit() {
  }
  submitDetails(){
    this.edit = !this.edit;
  }
}
