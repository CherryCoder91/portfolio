import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./angular/routed/home-page/home-page.module').then(m => m.HomePageModule)
},
{
    path: '',
    redirectTo: 'home/portfolio',
    pathMatch: 'full'
},
{
    path: '**',
    redirectTo: 'home/about',
    pathMatch: 'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
