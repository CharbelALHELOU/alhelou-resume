import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { PortofolioComponent } from './home/portofolio/portofolio.component';
import { AboutComponent } from './home/about/about.component';
import { ContactComponent } from './home/contact/contact.component';
import { ExperienceComponent } from './home/experience/experience.component';
import { SkillsComponent } from './home/skills/skills.component';
import { TypewriterComponent } from './typewriter/typewriter.component';
import { MoreComponent } from './home/portofolio/more/more.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PortofolioComponent,
    AboutComponent,
    ContactComponent,
    ExperienceComponent,
    SkillsComponent,
    TypewriterComponent,
    MoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
