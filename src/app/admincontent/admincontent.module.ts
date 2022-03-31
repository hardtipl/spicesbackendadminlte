import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdmincontentRoutingModule } from './admincontent-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductComponent } from './product/product.component';
import { BrnadComponent } from './brnad/brnad.component';
import { CustomerComponent } from './customer/customer.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    DashboardComponent,
    ProductComponent,
    BrnadComponent,
    CustomerComponent
  ],
  imports: [
    CommonModule,
    AdmincontentRoutingModule,
    SharedModule,
    
  ]
})
export class AdmincontentModule { }
