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
  }
}
