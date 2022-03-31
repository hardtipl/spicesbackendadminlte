import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { CustomerComponent } from './customer/customer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrnadComponent } from './brnad/brnad.component';

const routes: Routes = [
  {
    path:'',  component:DashboardComponent,
    children:[
     { path:'brand',component:BrnadComponent},
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
