import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {

   PARTNERS_ARRAY:any=[
    {
      imgName:"../../assets/img/h5.jpg"
    },
    {
      imgName:"../../assets/img/h5.jpg"
    },
    {
      imgName:"../../assets/img/h5.jpg"
    },
    {
      imgName:"../../assets/img/h5.jpg"
    }
  ]
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['<', '>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  };
  urlImage="../../assets/img/h1.jpg";
  constructor() { }
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  ngOnInit(): void {
  }

  changeImage(img:any){
    this.urlImage = img.target.src;
  }

}
