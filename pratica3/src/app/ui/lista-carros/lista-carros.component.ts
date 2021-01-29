import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { CarroComponent } from 'src/app/components/carro/carro.component';

import { Carro } from 'src/app/models/carro';
import { BASE_CARROS } from '../data/base-carros';

@Component({
  selector: 'app-lista-carros',
  templateUrl: './lista-carros.component.html',
  styleUrls: ['./lista-carros.component.css']
})
export class ListaCarrosComponent implements OnInit {

  @ViewChildren(CarroComponent)
  public listaComponents: QueryList<CarroComponent>;

  public listaCarros: Carro[] = [];

  constructor() {
    this.listaCarros = BASE_CARROS;
  }

  ngOnInit(): void {
  }

  public aplicarDescontoAvista(): void {
    this.listaComponents.forEach(c => {
      c.aplicarDesconto(0.2);
    });
  }

}
