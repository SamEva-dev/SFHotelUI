import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { SidebarComponent } from './component/sidebar.component';
import { SideBarRoutingModule } from './side-bar-routing.module';


const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  declarations: [
    SidebarComponent
  ],
  imports: [
    CommonModule,
    BsDropdownModule,
    BsDropdownModule.forRoot(),
    SideBarRoutingModule,
    PerfectScrollbarModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatIconModule,
    MatListModule

  ],
  exports:[ SidebarComponent ],
  providers:[
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ]
})
export class SideBarModule { }
