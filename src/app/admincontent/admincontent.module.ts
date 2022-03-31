import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdmincontentRoutingModule } from './admincontent-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrnadComponent } from './brnad/brnad.component';
import{StockComponent} from './stock/stock.component'
import { SharedModule } from '../shared/shared.module';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductComponent } from './product/product.component';



@NgModule({
  declarations: [
    DashboardComponent,
    ProductComponent,
    BrnadComponent,
    StockComponent,
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
