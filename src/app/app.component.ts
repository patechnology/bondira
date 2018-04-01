import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAzOsKr0MxdHru5dBMoVGIzLyxv_NaL9P4',
      authDomain: 'bondira-c1ac5.firebaseapp.com',
      databaseURL: 'https://bondira-c1ac5.firebaseio.com',
      projectId: 'bondira-c1ac5',
      storageBucket: 'bondira-c1ac5.appspot.com"',
      messagingSenderId: '374809673650'
    });
  }
}
