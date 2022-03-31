import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandComponent } from '../content/brand/brand.component';
import { ProductComponent } from '../content/product/product.component';
import { CustomerComponent } from './customer/customer.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path:'',  component:DashboardComponent,
    children:[
     { path:'brand',component:BrandComponent},
      {path:'product',component:ProductComponent},
      {path:'customer',component:CustomerComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdmincontentRoutingModule { }
