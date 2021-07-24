import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { ChartsModule } from 'ng2-charts';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';



@NgModule({
  declarations: [
    BarChartComponent,
    LineChartComponent,
    PieChartComponent,
    DoughnutChartComponent
  ],
  imports: [
    CommonModule,
    ChartsModule
  ],
  exports:[
    BarChartComponent,
    LineChartComponent,
    PieChartComponent,
  ]
})
export class ChartModule { }
