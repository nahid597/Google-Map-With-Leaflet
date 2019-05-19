import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapComponent } from './map/map.component';
import { NavbarHeader } from './navbar/navbar.header';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '' , redirectTo: '/home', pathMatch: 'full'},
  {path: 'getstarted' , component: MapComponent},
  {path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
