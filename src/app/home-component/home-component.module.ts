import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelsComponent } from './hotels/hotels.component';
import { HotelDetailsComponent } from './hotel-details/hotel-details.component';
import { PolicyComponent } from './policy/policy.component';



@NgModule({
  declarations: [
    HotelsComponent,
    HotelDetailsComponent,
    PolicyComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HotelsComponent
  ]
})
export class HomeComponentModule { }
