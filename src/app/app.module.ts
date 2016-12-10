import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { ProjetoComponent } from './projeto/projeto.component';
import { ProjetoFabComponent } from './projeto-fab/projeto-fab.component';
import { ProjetoTagComponent } from './projeto-tag/projeto-tag.component';
import { SliderComponent } from './slider/slider.component';
import { RodapeComponent } from './rodape/rodape.component';
import { LoginComponent } from './login/login.component';
import { DepoimentoComponent } from './depoimento/depoimento.component';
import { ContatoComponent } from './contato/contato.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    ProjetoComponent,
    ProjetoFabComponent,
    ProjetoTagComponent,
    SliderComponent,
    RodapeComponent,
    LoginComponent,
    DepoimentoComponent,
    ContatoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterializeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
