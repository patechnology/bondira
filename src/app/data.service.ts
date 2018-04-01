import { Injectable } from '@angular/core';

import * as firebase from 'firebase';
@Injectable()
export class DataService {

  private rootRef: firebase.database.Reference;
  private usersRef: firebase.database.Reference;
  private orderRef: firebase.database.Reference;

  constructor() { }

  init() {
    this.rootRef = firebase.database().ref();
    this.usersRef = this.rootRef.child('users');
    this.orderRef = this.rootRef.child('orders');
    this.getUserType();
  }

  getUserType() {
    const user = firebase.auth().currentUser;
    if (user) {
      return this.usersRef.child(user.uid).once('value').then((data) => {
        return data.val();
      });
    }
  }

  setUserType(type: string) {
    const user = firebase.auth().currentUser;
    if (user) {
      return this.usersRef.child(user.uid).child('type').set(type).then((data) => {
        return data;
      });
    }
  }
}
