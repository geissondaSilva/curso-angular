import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PainelComponent } from './components/painel/painel.component';
import { FerramentasComponent } from './components/ferramentas/ferramentas.component';
import { PaletaCorComponent } from './components/paleta-cor/paleta-cor.component';
import { TextoDirective } from './directives/texto.directive';
import { ValueComponent } from './components/value/value.component';

@NgModule({
  declarations: [
    AppComponent,
    PainelComponent,
    FerramentasComponent,
    PaletaCorComponent,
    TextoDirective,
    ValueComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
