import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {

  public pieChartDate:number[]=[350,450,120];
public pieChartLabels:string[]=['XYZ Logistics', 'main St Bakery', 'Acme Hosting'];
  public colors:any[]=[
    {
      backgroundColor:['#26547c','#ff6b6b','#ffd166']
    }
  ];
  public pieChartType:any= 'pie';
  constructor() { }

  ngOnInit(): void {
  }

}
