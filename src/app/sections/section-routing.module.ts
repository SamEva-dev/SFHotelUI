import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SectionSalesComponent } from './section-sales/section-sales.component';
import { SectionOrdersComponent } from './section-orders/section-orders.component';
import { SectionHealthComponent } from './section-health/section-health.component';

const routesChild: Routes = [
  { path: 'sales', component: SectionSalesComponent },
  { path: 'orders', component: SectionOrdersComponent},
  { path: 'health', component: SectionHealthComponent},

 ]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routesChild)
  ]
})
export class SectionRoutingModule { }
