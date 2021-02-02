import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PaletaCorComponent } from './components/paleta-cor/paleta-cor.component';
import { ColorModule } from './modules/color/color.module';

@NgModule({
  declarations: [
    AppComponent,
    PaletaCorComponent
  ],
  imports: [
    BrowserModule,
    ColorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
