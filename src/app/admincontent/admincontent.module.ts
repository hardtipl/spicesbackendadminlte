import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdmincontentRoutingModule } from './admincontent-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrnadComponent } from './brnad/brnad.component';
import { CustomerComponent } from './customer/customer.component';
import { SharedModule } from '../shared/shared.module';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductComponent } from './product/product.component';



@NgModule({
  declarations: [
    DashboardComponent,
    ProductComponent,
    BrnadComponent,
    CustomerComponent,
    UpdateproductComponent,

  ],
  imports: [
    CommonModule,
    AdmincontentRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule
    
  ]
})
export class AdmincontentModule { }
