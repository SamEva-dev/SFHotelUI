import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routesChild: Routes = [
 ]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routesChild)
  ],
  exports:[ RouterModule ]
})
export class SectionRoutingModule { }
