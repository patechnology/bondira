import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rider',
  templateUrl: './rider.component.html',
  styleUrls: ['./rider.component.css']
})
export class RiderComponent implements OnInit {
  activeTab = 'my-biz';

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((data) => {
      console.log(data);
      this.activeTab = data['tab'];
    });
  }

}
