import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    RouterModule
  ],
  exports:[
    
  ]
})
export class AdminModule { }
