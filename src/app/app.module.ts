import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarModule } from './nav-bar/nav-bar.module';
import { SectionModule } from './sections/section.module';
import { SideBarModule } from './side-bar/side-bar.module';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from './auth/auth.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    SideBarModule,
    NavBarModule,
    SectionModule,
    FontAwesomeModule,
    AuthModule,
    BrowserAnimationsModule,

    /* Need to be alway the last in the imports array */
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
