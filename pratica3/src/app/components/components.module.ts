import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BarraComponent } from './barra/barra.component';
import { CarroComponent } from './carro/carro.component';
import { PesquisaComponent } from './pesquisa/pesquisa.component';

const EXPORTS = [BarraComponent, CarroComponent, PesquisaComponent];

@NgModule({
  declarations: [...EXPORTS],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [...EXPORTS]
})
export class ComponentsModule { }
