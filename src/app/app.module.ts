import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { CommentComponent } from './comment/comment.component';
import { HomeComponent } from './home/home.component';
import { LoginService } from './login/login.service';
import { PhoneComponent } from './login/phone/phone.component';
import { DriverComponent } from './driver/driver.component';
import { NewOrderComponent } from './rider/new-order/new-order.component';
import { MyOrderComponent } from './rider/my-order/my-order.component';
import { MyBizComponent } from './rider/my-biz/my-biz.component';
import { MyBizDriverComponent } from './driver/my-biz-driver/my-biz-driver.component';
import { LastAcceptedComponent } from './driver/last-accepted/last-accepted.component';
import { MarketComponent } from './driver/market/market.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    CommentComponent,
    HomeComponent,
    PhoneComponent,
    DriverComponent,
    NewOrderComponent,
    MyOrderComponent,
    MyBizComponent,
    MyBizDriverComponent,
    LastAcceptedComponent,
    MarketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
