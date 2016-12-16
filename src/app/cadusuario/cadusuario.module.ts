import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterializeModule } from 'angular2-materialize';
import { CadusuarioComponent } from './cadusuario.component';

@NgModule({
  imports: [
    CommonModule,
    MaterializeModule
  ],
  declarations: [CadusuarioComponent],
  exports: [CadusuarioComponent]
})
export class CadusuarioComponent { }
