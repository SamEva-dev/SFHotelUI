import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SectionSalesComponent } from './section-sales/section-sales.component';
import { SectionOrdersComponent } from './section-orders/section-orders.component';
import { SectionHealthComponent } from './section-health/section-health.component';

const routesChild: Routes = [
 ]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routesChild)
  ],
  exports:[ RouterModule ]
})
export class SectionRoutingModule { }
