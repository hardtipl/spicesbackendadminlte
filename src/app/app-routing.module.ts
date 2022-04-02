import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './admincontent/product/product.component';
import { GauthguardGuard } from './services/gauthguard.guard';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {
    path:'',loadChildren:()=>import('./admin/admin.module').then(login=>login.AdminModule)
  },
  {
    path:'admin',loadChildren:()=>import('./admincontent/admincontent.module').then(loggedin=>loggedin.AdmincontentModule)
  },
  { path:'**' , redirectTo: 'test', pathMatch: 'full'  },
   {path:'test',component: TestComponent}
];

@NgModule({
  // imports: [RouterModule.forRoot(routes)],
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
