import { Component, OnInit } from '@angular/core';

import { Carro } from 'src/app/models/carro';
import { BASE_CARROS } from '../data/base-carros';

@Component({
  selector: 'app-lista-carros',
  templateUrl: './lista-carros.component.html',
  styleUrls: ['./lista-carros.component.css']
})
export class ListaCarrosComponent implements OnInit {

  public listaCarros: Carro[] = [];

  constructor() {
    this.listaCarros = BASE_CARROS;
  }

  ngOnInit(): void {
  }

}
