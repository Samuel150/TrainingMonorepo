import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SustainabilityOptionModule } from './componets';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SustainabilityOptionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
