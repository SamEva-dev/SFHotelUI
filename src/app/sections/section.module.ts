import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionSalesComponent } from './section-sales/section-sales.component';
import { SectionOrdersComponent } from './section-orders/section-orders.component';
import { SectionHealthComponent } from './section-health/section-health.component';



@NgModule({
  declarations: [
    SectionSalesComponent,
    SectionOrdersComponent,
    SectionHealthComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SectionModule { }
