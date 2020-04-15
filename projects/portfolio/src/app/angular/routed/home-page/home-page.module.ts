import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ProfileHeaderComponent } from './components/profile-header/profile-header.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatChipsModule } from '@angular/material/chips';
import { SkillsComponent } from './components/skills/skills.component';
import { AboutComponent } from './components/about/about.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { HomeNavComponent } from './components/home-nav/home-nav.component';
import { BlogCardComponent } from './components/blog-card/blog-card.component';

@NgModule({
  declarations: [
    HomePageComponent, 
    ProfileHeaderComponent,
    SkillsComponent,
    AboutComponent,
    PortfolioComponent,
    HomeNavComponent,
    BlogCardComponent
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatChipsModule
  ],
  exports: [HomePageComponent]
})
export class HomePageModule { }
