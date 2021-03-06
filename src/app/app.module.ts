import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { PortofolioComponent } from './portofolio/portofolio.component';
import { ContactComponent } from './contact/contact.component';
import { ExperienceComponent } from './experience/experience.component';
import { TypewriterComponent } from './typewriter/typewriter.component';
import { FormsModule } from '@angular/forms';
import { StatComponent } from './stat/stat.component';
import { DetailsComponent } from './portofolio/details/details.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ContactModalComponent } from './contact-modal/contact-modal.component';
import { CommentComponent } from './comment/comment.component';
import { AddCommentComponent } from './comment/add-comment/add-comment.component';
import { FollowComponent } from './follow/follow.component';
import { CarouselComponent } from './carousel/carousel.component';





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
    StatComponent,
    DetailsComponent,
    ContactModalComponent,
    CommentComponent,
    AddCommentComponent,
    FollowComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
