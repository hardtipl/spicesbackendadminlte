import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrnadComponent } from './brnad/brnad.component';
import { StockComponent } from './stock/stock.component';

const routes: Routes = [
  {
    path:'',  component:DashboardComponent,
    children:[
     { path:'brand',component:BrnadComponent},
      {path:'product',component:ProductComponent},
      {path:'stock',component:StockComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdmincontentRoutingModule { }
