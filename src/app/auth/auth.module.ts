import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';

import { AuthRoutingModule } from './auth-routing.module';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ConfirmEmailComponent } from './confirm-email/confirm-email.component';
import { ChangePasswordComponent } from './change-password/change-password.component';




@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    ResetPasswordComponent,
    ConfirmEmailComponent,
    ChangePasswordComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MatTabsModule,
    MatIconModule,
    MatButtonToggleModule,
    MatCardModule,
    FormsModule,
    HttpClientModule
  ],
  exports:[]
})
export class AuthModule { }
