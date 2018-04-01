import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private dataService: DataService,
    private router: Router) { }

  ngOnInit() {
  }

  onSelect(type) {
    this.dataService.setUserType(type).then(() => {
      if (type === 'rider') {
        this.router.navigate(['rider/my-biz']);
      } else {
        this.router.navigate(['driver/my-biz']);
      }
    });
  }

}
