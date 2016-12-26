import { Component, OnInit } from '@angular/core';
import { Projeto } from '../model/projeto.model.ts';
import { ProjetoService } from './projeto.service.ts'

@Component({
  selector: 'app-projeto',
  templateUrl: './projeto.component.html',
  styleUrls: ['./projeto.component.scss']
})
export class ProjetoComponent implements OnInit {
 listaprojeto: Projeto[] = [];
 
 constructor( private projetoservice: ProjetoService) {
  
 }

 ngOnInit() {
  this.listaprojeto = this.projetoservice.getProjeto();
 }

}
