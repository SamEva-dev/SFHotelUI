import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionSalesComponent } from '../sections/section-sales/section-sales.component';
import { SectionOrdersComponent } from '../sections/section-orders/section-orders.component';
import { SectionHealthComponent } from '../sections/section-health/section-health.component';
import { MapsComponent } from '../sections/maps/maps.component';
import { RouterModule, Routes } from '@angular/router';

const routesChild: Routes = [
  { path: 'sales', component: SectionSalesComponent },
  { path: 'orders', component: SectionOrdersComponent},
  { path: 'health', component: SectionHealthComponent},
  { path: 'maps', component: MapsComponent}
 ]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routesChild),
  ],
  exports:[ RouterModule ]
})
export class ToolbarRoutingModule { }
