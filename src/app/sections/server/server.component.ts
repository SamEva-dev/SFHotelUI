import { Component, Input, OnInit } from '@angular/core';
import { Server } from 'src/app/shared/server';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})
export class ServerComponent implements OnInit {

  constructor() { }

  color: string;
  buttonText:string;
  @Input() serverInput: Server;

  ngOnInit(): void {
    this.setServerAction(this.serverInput.isOnline);
  }

  setServerAction(isOnline: boolean){

    if ( isOnline)
    {
      this.serverInput.isOnline = true;
      this.color = "#66BB6A";
      this.buttonText="Shut Down"
    }
    else{
      this.serverInput.isOnline = false;
      this.color='#FF6B6B';
      this.buttonText = "Start";
    }


  }
  public toggleStatus(onlineStatus:boolean){
    console.log("server online:",onlineStatus)
    this.serverInput.isOnline = !this.serverInput.isOnline;
    this.setServerAction(!onlineStatus);
  }

}
