import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjetoComponent } from './projeto.component';
import { ProjetoFabComponent } from './fab/projeto-fab.component';
import { ProjetoTagComponent } from './tag/projeto-tag.component';
import { CadprojetoComponent } from './cadprojeto/cadprojeto.component';

@NgModule({
  imports: [
    CommonModule,
    ProjetoFabComponent,
    ProjetoTagComponent
  ],
  declarations: [ProjetoComponent, CadprojetoComponent]
})
export class ProjetoModule { }
