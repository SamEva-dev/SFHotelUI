import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';


const routes: Routes = [
  { path: '', component: HomeComponent},
{ path: '', redirectTo: 'home', pathMatch: 'full' },
{ path: '**', redirectTo: 'home', pathMatch: 'full' },  ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CarouselModule.forRoot()
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
