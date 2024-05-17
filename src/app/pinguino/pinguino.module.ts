import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PinguinoComponent } from './pinguino.component';
import { HttpClientModule } from '@angular/common/http';
import { PinguinoListComponent } from './pinguino-list/pinguino-list.component';
import { Routes } from '@angular/router';
import { PinguinoDetailComponent } from './pinguino-detail/pinguino-detail.component';



@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [PinguinoDetailComponent, PinguinoListComponent],
  exports:[PinguinoListComponent, PinguinoDetailComponent]
})
export class PinguinoModule { }
