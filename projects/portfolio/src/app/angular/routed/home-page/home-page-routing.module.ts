import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ProfileHeaderComponent } from './components/profile-header/profile-header.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';


const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    children: [
      {
        path: 'about', component: AboutComponent
      },
      {
        path: 'skills', component: SkillsComponent
      },
      {
        path: 'portfolio', component: PortfolioComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule { }
