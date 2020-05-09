import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { PortofolioComponent } from './home/portofolio/portofolio.component';
import { ContactComponent } from './home/contact/contact.component';
import { ExperienceComponent } from './home/experience/experience.component';
import { TypewriterComponent } from './typewriter/typewriter.component';
import { PortfolioDetailsComponent } from './home/portofolio/portfolio-details/portfolio-details.component';
import { FormsModule } from '@angular/forms';
import { StatComponent } from './stat/stat.component';
import { SkillsComponent } from './home/skills/skills.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PortofolioComponent,
    ContactComponent,
    ExperienceComponent,
    TypewriterComponent,
    PortfolioDetailsComponent,
    StatComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
