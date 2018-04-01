import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  signIn(form: NgForm) {
    this.loginService.signIn(form.value);
  }

  signUp(form: NgForm) {
    this.loginService.signUp(form.value);
  }
}
