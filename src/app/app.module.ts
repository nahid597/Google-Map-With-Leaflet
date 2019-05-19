import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NavbarHeader } from './navbar/navbar.header';
import {MatButtonModule} from '@angular/material';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    NavbarHeader,
    HomeComponent
  ],
  imports: [
    MatButtonModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
