import { Injectable } from '@angular/core';
import { Projeto } from '../model/projeto.model.ts';

let listaprojetos: Projeto[] = [
    new Projeto( 1, 'Projeto Mock 1', 'Descrição Mock Um é assim que se faz!'),
    new Projeto( 2, 'Projeto Mock 2', 'Descrição Mock Dois é assim que se faz!')
];

@Injectable()
export class ProjetoService {
    
  constructor() { }
  
  getProjeto():Projeto[]{
      return listaprojetos;
  }

}
