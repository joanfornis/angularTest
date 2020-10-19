import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CardV1Component } from './card-v1/card-v1.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

const router: Routes = [
  { path: '', component: HeaderComponent },
  { path: 'test', component: CardV1Component },
  { path: '**', component: FooterComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    CardV1Component,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(router)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
