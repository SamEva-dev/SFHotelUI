import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelsComponent } from './hotels/hotels.component';
import { HotelDetailsComponent } from './hotel-details/hotel-details.component';
import { PolicyComponent } from './policy/policy.component';
import { FooterTopComponent } from './footer/footer-top/footer-top.component';
import { FooterMiddleComponent } from './footer/footer-middle/footer-middle.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    HotelsComponent,
    HotelDetailsComponent,
    PolicyComponent,
    FooterTopComponent,
    FooterMiddleComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HotelsComponent,
    HotelDetailsComponent,
    FooterComponent
  ]
})
export class HomeComponentModule { }
