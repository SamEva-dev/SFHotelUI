import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/shared/order';

@Component({
  selector: 'app-section-orders',
  templateUrl: './section-orders.component.html',
  styleUrls: ['./section-orders.component.scss']
})
export class SectionOrdersComponent implements OnInit {

  constructor() { }

  orders: Order[] = [
    {id: 1, customer:{id:1, name: 'Main St Bakery', state:'CO', email: 'email1@email.com'}, total:230, placed:new Date(2021, 12, 1), fulfilled: new Date(2021, 12,2), status: 'Complete'},
    {id: 2, customer:{id:2, name: 'TamTam WeedKend', state:'CM', email: 'email2@email.com'}, total:20, placed:new Date(2021, 11, 1), fulfilled: new Date(2021, 10,2), status: 'Complete'},
    {id: 3, customer:{id:3, name: 'Main St Bakery', state:'CO', email: 'email1@email.com'}, total:230, placed:new Date(2021, 12, 1), fulfilled: new Date(2021, 12,2), status: 'Complete'},
    {id: 4, customer:{id:4, name: 'Main St Bakery', state:'CO', email: 'email1@email.com'}, total:230, placed:new Date(2021, 12, 1), fulfilled: new Date(2021, 12,2), status: 'Complete'},
    {id: 5, customer:{id:5, name: 'Main St Bakery', state:'CO', email: 'email1@email.com'}, total:230, placed:new Date(2021, 12, 1), fulfilled: new Date(2021, 12,2), status: 'Complete'}
  ];
  ngOnInit(): void {
  }

}
