import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterializeModule } from 'angular2-materialize';
import { LoginComponent } from './login.component';

@NgModule({
  imports: [
    CommonModule,
    MaterializeModule
  ],
  declarations: [LoginComponent],
  exports: [LoginComponent]
})
export class LoginComponent { }
