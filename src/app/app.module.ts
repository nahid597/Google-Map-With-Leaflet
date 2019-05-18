import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NavbarHeader } from './navbar/navbar.header';
import {MatButtonModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    NavbarHeader
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MatButtonModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
