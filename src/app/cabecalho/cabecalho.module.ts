import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterializeModule } from 'angular2-materialize';
import { CabecalhoComponent } from './cabecalho.component';



@NgModule({
  imports: [
    CommonModule,
    MaterializeModule
  ],
  declarations: [CabecalhoComponent],
  exports: [CabecalhoComponent]
})
export class CabecalhoModule { }
