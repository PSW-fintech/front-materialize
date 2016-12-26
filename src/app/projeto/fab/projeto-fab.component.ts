import { Component, OnInit, Input } from '@angular/core';
import { Projeto } from '../../model/projeto.model';

@Component({
  selector: 'app-projeto-fab',
  templateUrl: './projeto-fab.component.html',
  styleUrls: ['./projeto-fab.component.scss']
})
export class ProjetoFabComponent implements OnInit {
  
  @Input()
  Projeto: Projeto;
  
  constructor() {}

  ngOnInit() {
    
  }

}
