import { NgModule } from '@angular/core';
import { RegisterComponent } from './register/register.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ConfirmEmailComponent } from './confirm-email/confirm-email.component';
import { ChangePasswordComponent } from './change-password/change-password.component';

const routesChild: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: 'confirm-email', component: ConfirmEmailComponent },
  { path: 'change-password', component: ChangePasswordComponent }
 ]


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routesChild),
  ],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
