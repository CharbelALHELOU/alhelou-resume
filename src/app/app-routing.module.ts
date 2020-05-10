import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PortofolioComponent } from './portofolio/portofolio.component';
import { PortfolioDetailsComponent } from './portofolio/portfolio-details/portfolio-details.component';
import { DetailsComponent } from './portofolio/details/details.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"portfolio", component: PortofolioComponent},
  {path:"portfolio/:id", component: PortfolioDetailsComponent},
  {path:"contact", component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
