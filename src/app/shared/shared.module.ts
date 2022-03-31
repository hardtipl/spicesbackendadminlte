import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { SidenavComponent } from './sidenav/sidenav.component';
import {MatTabsModule} from '@angular/material/tabs';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    SidebarComponent,
    SidenavComponent,
    FooterComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatTabsModule,
  ],
  exports: [
    SidebarComponent,  
    SidenavComponent  ,

    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatTabsModule,
    SidebarComponent,
    SidenavComponent,
    FooterComponent
  ]
})
export class SharedModule { }
