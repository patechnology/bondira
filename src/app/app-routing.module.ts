import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PhoneComponent } from './login/phone/phone.component';
import { RiderComponent } from './rider/rider.component';
import { DriverComponent } from './driver/driver.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'login/email', component: LoginComponent },
  { path: 'login/phone', component: PhoneComponent },
  { path: 'rider/:tab', component: RiderComponent},
  { path: 'driver/:tab', component: DriverComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
