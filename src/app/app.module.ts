import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';

import {NgProgressModule} from '@ngx-progressbar/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarModule } from './nav-bar/nav-bar.module';
import { SectionModule } from './sections/section.module';
import { SideBarModule } from './side-bar/side-bar.module';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from './auth/auth.module';
import { NavComponent } from './nav/nav.component';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
  ],
  imports: [
    BrowserModule,
    SideBarModule,
    NavBarModule,
    SectionModule,
    FontAwesomeModule,
    AuthModule,
    BrowserAnimationsModule,
    NgProgressModule,
    LayoutModule,

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
  bootstrap: [AppComponent],

})
export class AppModule { }
