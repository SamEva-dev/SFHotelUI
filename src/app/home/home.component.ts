import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

const HOTEL=[
  {
    id:1,
    name:"Hotel Hilton",
    newPrice:81.00,
    oldPrice:80.00,
    imgPrincipal:"../../assets/img/h1.jpg",
    discount:9,
    imgs:["../../assets/img/h2.jpg","../../assets/img/h3.jpg","../../assets/img/h4.jpg"],
    title:"Qu'est-ce que le Lorem Ipsum?",
    description:"Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression"+
          "Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500",
    day:24,
    mouth:"Juin"
  },
  {
    id:2,
    name:"Hotel Continental",
    newPrice:90.00,
    oldPrice:70.00,
    imgPrincipal:"../../assets/img/h2.jpg",
    discount:10,
    imgs:["../../assets/img/h1.jpg","../../assets/img/h3.jpg","../../assets/img/h5.jpg"],
    title:"Qu'est-ce que le Lorem Ipsum?",
    description:"Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression"+
          "Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500",
    day:25,
    mouth:"Juin"
  },
  {
    id:3,
    name:"Hotel Palace",
    newPrice:71.00,
    oldPrice:70.00,
    imgPrincipal:"../../assets/img/h3.jpg",
    discount:7,
    imgs:["../../assets/img/h2.jpg","../../assets/img/h1.jpg","../../assets/img/h4.jpg"],
    title:"Qu'est-ce que le Lorem Ipsum?",
    description:"Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression"+
          "Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500",
    day:26,
    mouth:"Juin"
  },
  {
    id:3,
    name:"Hotel De Ville",
    newPrice:171.00,
    oldPrice:170.00,
    imgPrincipal:"../../assets/img/h5.jpg",
    discount:7,
    imgs:["../../assets/img/h1.jpg","../../assets/img/h4.jpg","../../assets/img/h3.jpg"],
    title:"Qu'est-ce que le Lorem Ipsum?",
    description:"Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression"+
          "Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500.",
    day:27,
    mouth:"Juin"
  }
]
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {

  hotels = HOTEL;
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



}
