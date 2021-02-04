import { Component, OnInit } from '@angular/core';
import { Texto } from 'src/app/core/texto';

@Component({
  selector: 'app-paleta-cor',
  templateUrl: './paleta-cor.component.html',
  styleUrls: ['./paleta-cor.component.css']
})
export class PaletaCorComponent implements OnInit {

  public cores: string[] = [];

  public cor = 'red';

  constructor(
    public texto: Texto
  ) {
    this.cores = [
      'green',
      'red',
      'blue',
      'yellow',
      'cyan',
      'black',
      'white',
    ];
  }

  ngOnInit(): void {
    console.log(this.texto);

  }

  public mudarCor(value: string): void {
    this.texto.cor = value;
  }

}
