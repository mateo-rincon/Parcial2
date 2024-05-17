import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PinguinoModule } from './pinguino/pinguino.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PinguinoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
