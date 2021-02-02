import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarraComponent } from './barra/barra.component';
import { CarroComponent } from './carro/carro.component';
import { SearchComponent } from './search/search.component';


const EXPORTS = [
  BarraComponent, CarroComponent, SearchComponent
];
@NgModule({
  declarations: [...EXPORTS],
  imports: [
    CommonModule
  ],
  exports: [
    ...EXPORTS,
  ]
})
export class ComponentsModule { }
