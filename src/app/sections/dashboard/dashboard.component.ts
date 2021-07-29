import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';


const STATISTIQUE_REVENU=[
  {name:"Revenue", price:199.099, periode:"Since last month",ratting:5.35,icon:"fa fa-eur"},
  {name:"Booking", price:2.200, periode:"Since last month",ratting:8.66,icon:"fa fa-shopping-cart"},
  {name:"Visitors", price:702.258, periode:"Since last month",ratting:2.81,icon:"fa fa-users"},
  {name:"Followers", price:+50.000, periode:"Since last month",ratting:1.74,icon:"fa fa-heartbeat"},

]
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  statistique =STATISTIQUE_REVENU;


  constructor() { }

  ngOnInit() {

  }
}
