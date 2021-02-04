import { Component } from '@angular/core';
import { Texto } from './core/texto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    Texto
  ]
})
export class AppComponent {
  title = 'pratica5';
}
