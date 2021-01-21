import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public title = 'Alertar';

  public contador: number = 0;

  public link: string = 'https://www.google.com.br/';

  public abrirAlerta() {
    alert('Estou no curso de angular');
    this.contador++;
  }
}
