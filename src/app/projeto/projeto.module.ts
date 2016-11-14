import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjetoComponent } from './projeto.component';
import { ProjetoFabComponent } from '../projeto-fab/projeto-fab.component';
import { ProjetoTagComponent } from '../projeto-tag/projeto-tag.component';

@NgModule({
  imports: [
    CommonModule,
    ProjetoFabComponent,
    ProjetoTagComponent
  ],
  declarations: [ProjetoComponent]
})
export class ProjetoModule { }
