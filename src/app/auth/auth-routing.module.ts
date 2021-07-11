import { NgModule } from '@angular/core';
import { RegisterComponent } from './register/register.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';

const routesChild: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent }
 ]


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routesChild),
  ],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
