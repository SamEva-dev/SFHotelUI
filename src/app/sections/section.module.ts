import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';

import { SectionSalesComponent } from './section-sales/section-sales.component';
import { SectionOrdersComponent } from './section-orders/section-orders.component';
import { SectionHealthComponent } from './section-health/section-health.component';
import { SectionRoutingModule } from './section-routing.module';
import { ChartModule } from '../chart/chart.module';




@NgModule({
  declarations: [
    SectionSalesComponent,
    SectionOrdersComponent,
    SectionHealthComponent
  ],
  imports: [
    CommonModule,
    SectionRoutingModule,
    ChartModule,
  ],
  exports:[
    SectionSalesComponent,
    SectionOrdersComponent,
    SectionHealthComponent,
  ]
})
export class SectionModule { }
