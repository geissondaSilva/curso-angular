import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'aula5';
  public descricao: string = 'Está é a aula 5 de angular';

  public linkImagemAnimal: string = '';

  public termineiCurso: Boolean = false;

  public frutaPreferida: string = '';

  public frutas: string[] = ['Maça', 'pera', 'abacaxi', 'pessego'];

  constructor() {}

  public setarImagemAnimal(animal: string) {
    const links: any = {
      'cachorro': () => 'link',
      'gato': () => 'link',
      'peixe': () => 'link'
    };
    this.linkImagemAnimal = links[animal] ? links[animal]() : '';
  }

  public remover(indice: number) {
    this.frutas.splice(indice, 1);
  }

  public favoritarFruta(favorita: string) {
    this.frutaPreferida = favorita;
  }
}
