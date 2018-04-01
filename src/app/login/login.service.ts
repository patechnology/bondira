import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import * as firebase from 'firebase';
import { Subject } from 'rxjs/Subject';
import { DataService } from '../data.service';

@Injectable()
export class LoginService {
  loggedUser;
  isLoggedIn = false;
  onLoggedIn = new Subject<void>();
  confirmation;
  recaptchaVerifier;

  constructor(private router: Router,
    private dataService: DataService) { }

  init(callback: () => void) {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.loggedUser = user;
        callback();
        this.dataService.getUserType().then((data) => {
          if (data && data.type) {
            if (data.type === 'rider') {
              this.router.navigate(['rider/my-biz']);
            } else {
              this.router.navigate(['driver/my-biz']);
            }
          } else {
            this.router.navigate(['select-category']);
          }
        });
        this.onLoggedIn.next();
      } else {
        // this.router.navigate(['login']);
      }
    });
  }

  signIn(user) {
    firebase.auth().signInWithEmailAndPassword(user.email, user.password)
      .then(res => { })
      .catch(err => alert(err));
  }

  signUp(user) {
    firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
      .then(res => { })
      .catch(err => console.log(err));
  }

  sendCode(phone: string) {
    firebase.auth().signInWithPhoneNumber(phone, this.recaptchaVerifier)
      .then(confirmation => this.confirmation = confirmation)
      .catch(err => console.log(err));
  }

  verifyCode(code) {
    this.confirmation.confirm(code).then(() => {
      this.router.navigate(['home']);
    }).catch(err => {
      console.log(err);
    });
  }

  logout() {
    this.isLoggedIn = false;
    firebase.auth().signOut();
  }

}
