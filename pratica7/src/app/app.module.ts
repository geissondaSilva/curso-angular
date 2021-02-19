import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BarraPesquisaComponent } from './components/barra-pesquisa/barra-pesquisa.component';
import { FilmesTransmitidosComponent } from './components/filmes-transmitidos/filmes-transmitidos.component';
import { FilmesAssitidosComponent } from './components/filmes-assitidos/filmes-assitidos.component';
import { PesquisaComponent } from './components/pesquisa/pesquisa.component';

@NgModule({
  declarations: [
    AppComponent,
    BarraPesquisaComponent,
    FilmesTransmitidosComponent,
    FilmesAssitidosComponent,
    PesquisaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
