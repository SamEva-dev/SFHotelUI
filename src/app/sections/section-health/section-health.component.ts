import { Component, Input, OnInit } from '@angular/core';
import { Server } from 'src/app/shared/server';

const SAMPLE_SERVERS=[
  {id: 1 , name: 'dev-web', isOnline: false},
  {id: 2 , name: 'dev-email', isOnline: true},
  {id: 3 , name: 'prod-web', isOnline: false},
  {id: 4 , name: 'prod-email', isOnline: true},
]
@Component({
  selector: 'app-section-health',
  templateUrl: './section-health.component.html',
  styleUrls: ['./section-health.component.scss']
})
export class SectionHealthComponent implements OnInit {

  constructor() { }
  servers: Server[]=SAMPLE_SERVERS;
 
  ngOnInit(): void {
  }

}
