import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-barra',
  templateUrl: './barra.component.html',
  styleUrls: ['./barra.component.css'],
  inputs: ['titulo:title', 'descricao']
})
export class BarraComponent implements OnInit {

  public titulo: string = '';

  public descricao: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
