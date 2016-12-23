import { Component, OnInit } from '@angular/core';
import '../model/projeto.model.ts';

@Component({
  selector: 'app-projeto',
  templateUrl: './projeto.component.html',
  styleUrls: ['./projeto.component.scss']
})
export class ProjetoComponent implements OnInit {
 nome = 'Nome Projeto';
 resumo  = 'Breve descrição do projeto.';
 
  constructor() {  }

  ngOnInit() { }

}
