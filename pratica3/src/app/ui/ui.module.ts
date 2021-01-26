import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TollbarComponent } from './tollbar/tollbar.component';
import { ContatoComponent } from './contato/contato.component';
import { FormsModule } from '@angular/forms';
import { RodapeComponent } from './rodape/rodape.component';
import { ListaCarrosComponent } from './lista-carros/lista-carros.component';
import { ComponentsModule } from '../components/components.module';

const PUBLIC_ARTEFACTS = [
  TollbarComponent,
  ContatoComponent,
  RodapeComponent,
  ListaCarrosComponent,
];

@NgModule({
  declarations: [
    ...PUBLIC_ARTEFACTS,
    // importo o outro aqui
  ],
  imports: [
    CommonModule,
    FormsModule,
    ComponentsModule,
  ],
  exports: [
    ...PUBLIC_ARTEFACTS
  ]
})
export class UiModule { }
