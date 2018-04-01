import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { LoginService } from './login/login.service';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private loginService: LoginService,
    private dataService: DataService) { }

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAzOsKr0MxdHru5dBMoVGIzLyxv_NaL9P4',
      authDomain: 'bondira-c1ac5.firebaseapp.com',
      databaseURL: 'https://bondira-c1ac5.firebaseio.com',
      projectId: 'bondira-c1ac5',
      storageBucket: 'bondira-c1ac5.appspot.com"',
      messagingSenderId: '374809673650'
    });
    this.loginService.init(() => {
      this.dataService.init();
    });
    this.loginService.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('phone-sign-in-recaptcha', {
      'size': 'invisible',
      'callback': function (response) {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
      }
    });
  }

}
