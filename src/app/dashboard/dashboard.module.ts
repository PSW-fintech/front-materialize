import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterializeModule } from 'angular2-materialize';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    MaterializeModule
  ],
  declarations: [DashboardComponent],
  exports: [DashboardComponent]
})
export class DashboardComponent { }