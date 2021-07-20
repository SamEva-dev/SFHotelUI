import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatMenuModule} from '@angular/material/menu';

import {IvyCarouselModule} from 'angular-responsive-carousel';

import {NgProgressModule} from '@ngx-progressbar/core';

import { CarouselModule } from 'ngx-owl-carousel-o';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SectionModule } from './sections/section.module';
import { SideBarModule } from './side-bar/side-bar.module';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from './auth/auth.module';
import { NavComponent } from './nav/nav.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DisplayComponent } from './display/display.component';
import { VoterComponent } from './voter/voter.component';
import { TransactionDetailsComponent } from './transaction-details/transaction-details.component';
import { LabelComponent } from './label/label.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    NavBarComponent,
    DisplayComponent,
    VoterComponent,
    TransactionDetailsComponent,
    LabelComponent,
  ],
  imports: [
    BrowserModule,
    SideBarModule,
    SectionModule,
    FontAwesomeModule,
    AuthModule,
    BrowserAnimationsModule,
    NgProgressModule,
    LayoutModule,

    CarouselModule,

    MatMenuModule,

    IvyCarouselModule,

    MatToolbarModule,

    MatButtonModule,

    MatSidenavModule,

    MatIconModule,

    MatListModule,

    MatExpansionModule,

    /* Need to be alway the last in the imports array */
    AppRoutingModule,

  ],
  providers: [],
  exports:[IvyCarouselModule],
  bootstrap: [AppComponent],


})
export class AppModule { }
