import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PortofolioComponent } from './home/portofolio/portofolio.component';
import { PortfolioDetailsComponent } from './home/portofolio/portfolio-details/portfolio-details.component';
import { DetailsComponent } from './home/portofolio/details/details.component';


const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"home", component: HomeComponent},
  {path:"portfolio/:id", component: PortfolioDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
