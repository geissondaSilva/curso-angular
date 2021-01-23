import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarraComponent } from './barra/barra.component';
import { CarroComponent } from './carro/carro.component';



@NgModule({
  declarations: [BarraComponent, CarroComponent],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
