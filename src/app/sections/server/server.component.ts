import { Component, Input, OnInit } from '@angular/core';
import { Server } from 'src/app/shared/server';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})
export class ServerComponent implements OnInit {

  constructor() { }

  @Input() serverInput: Server;

  ngOnInit(): void {
  }

}
