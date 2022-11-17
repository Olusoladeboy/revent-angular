import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { BannerComponent } from './home/banner/banner.component';
import { SharedModule } from '../shared/shared.module';
import { AboutComponent } from './home/about/about.component';
import { ResumeComponent } from './home/resume/resume.component';
import { PortfolioComponent } from './home/portfolio/portfolio.component';
import { TabModule } from 'angular-tabs-component';
import { ContactComponent } from './home/contact/contact.component';


@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent,
    AboutComponent,
    ResumeComponent,
    PortfolioComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    TabModule
  ]
})
export class PagesModule { }
