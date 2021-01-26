import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarraComponent } from './barra/barra.component';
import { CarroComponent } from './carro/carro.component';

const EXPORTS = [BarraComponent, CarroComponent];

@NgModule({
  declarations: [...EXPORTS],
  imports: [
    CommonModule
  ],
  exports: [...EXPORTS]
})
export class ComponentsModule { }
