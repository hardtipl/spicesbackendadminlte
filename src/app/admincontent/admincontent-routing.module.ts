import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrnadComponent } from './brnad/brnad.component';
import { StockComponent } from './stock/stock.component';
import { GauthguardGuard } from '../services/gauthguard.guard';

const routes: Routes = [
  {
    path:'',  component:DashboardComponent,
    children:[
     { path:'brand',component:BrnadComponent},
      {path:'product',component:ProductComponent,canActivate:[GauthguardGuard]},
      {path:'stock',component:StockComponent,canActivate:[GauthguardGuard]}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdmincontentRoutingModule { }
