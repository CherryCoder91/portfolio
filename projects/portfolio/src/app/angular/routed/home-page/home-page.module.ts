import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ProfileHeaderComponent } from './components/profile-header/profile-header.component';


@NgModule({
  declarations: [HomePageComponent, ProfileHeaderComponent],
  imports: [
    CommonModule,
    HomePageRoutingModule
  ],
  exports: [HomePageComponent]
})
export class HomePageModule { }
