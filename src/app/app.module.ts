import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CardsV1Component } from './cards-v1/cards-v1.component';
import { CardV1Component } from './cards-v1/card-v1/card-v1.component';

const router: Routes = [
  { path: '', component: HeaderComponent },
  { path: 'test', component: CardsV1Component },
  { path: '**', component: FooterComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CardsV1Component,
    CardV1Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(router)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
