import { Component, Input, OnInit } from '@angular/core';




@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.scss']
})
export class HotelsComponent implements OnInit {

  @Input() hotel:any;


  constructor() { }

  ngOnInit(): void {
  }

  changeImage(img:any){
    this.hotel.imgPrincipal = img.target.src;
  }

}
