import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import * as firebase from 'firebase';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class LoginService {
  loggedUser;
  isLoggedIn = false;
  onLoggedIn = new Subject<void>();
  confirmation;
  recaptchaVerifier;

  constructor(private router: Router) { }

  init(callback: Function) {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.loggedUser = user;
        if (user.displayName) {
          this.isLoggedIn = true;
          if (this.router.url === '/login' || this.router.url === '/sign-up') {
            this.router.navigate(['home']);
          }
        } else {
          this.router.navigate(['sign-up']);
        }
        callback();
        this.onLoggedIn.next();
      } else {
        // this.router.navigate(['login']);
      }
    });
  }

  signIn(user) {
    firebase.auth().signInWithEmailAndPassword(user.email, user.password)
      .then(res => {})
      .catch(err => console.log(err));
  }

  signUp(user) {
    firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
      .then(res => {})
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