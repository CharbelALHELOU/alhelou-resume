import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MoreComponent } from './home/portofolio/more/more.component';


const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"portfolio", component: MoreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
