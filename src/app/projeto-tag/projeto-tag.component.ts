import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projeto-tag',
  templateUrl: './projeto-tag.component.html',
  styleUrls: ['./projeto-tag.component.css']
})
export class ProjetoTagComponent implements OnInit {
  tags: String[] = ["Social","Cidade","Animais"];
  constructor() { }

  ngOnInit() {
  }

}
