import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErroPipe } from './pipes/erro.pipe';



@NgModule({
  declarations: [ErroPipe],
  imports: [
    CommonModule
  ],
  exports: [ErroPipe]
})
export class FormularioModule { }
