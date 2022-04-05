import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdmincontentRoutingModule } from './admincontent-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import{StockComponent} from './stock/stock.component'
import { SharedModule } from '../shared/shared.module';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductComponent } from './product/product.component';
import { BrandComponent } from './brand/brand.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';


@NgModule({
  declarations: [
    DashboardComponent,
    ProductComponent,
    
    StockComponent,
    UpdateproductComponent,
    BrandComponent,

  ],
  imports: [
    CommonModule,
    AdmincontentRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule   
    
  ]
})
export class AdmincontentModule { }
