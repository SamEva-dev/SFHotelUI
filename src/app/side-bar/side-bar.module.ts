import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './component/sidebar.component';
import { SideBarRoutingModule } from './side-bar-routing.module';



@NgModule({
  declarations: [
    SidebarComponent
  ],
  imports: [
    CommonModule,
    SideBarRoutingModule
  ],
  exports:[ SidebarComponent ]
})
export class SideBarModule { }
