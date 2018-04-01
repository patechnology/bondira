import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.css']
})
export class PhoneComponent implements OnInit {
  signIn = false;
  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  sendOTP(form: NgForm) {
    this.loginService.sendCode(form.value.phone);
    this.signIn = true;
  }
  onSignIn(form: NgForm) {
    this.loginService.verifyCode(form.value.OTP);
  }
}
