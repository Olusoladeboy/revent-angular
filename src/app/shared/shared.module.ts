import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderTitleComponent } from './header-title/header-title.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    HeaderTitleComponent
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    HeaderTitleComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
