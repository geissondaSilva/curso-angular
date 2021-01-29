import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Carro } from 'src/app/models/carro';

@Component({
  selector: 'app-carro',
  templateUrl: './carro.component.html',
  styleUrls: ['./carro.component.css']
})
export class CarroComponent implements OnInit {

  @ViewChild('img', { static: true })
  private imagemEl: ElementRef<HTMLDivElement>;

  @Input() public carro: Carro;

  private descontoAplicado = false;

  constructor() { }

  ngOnInit(): void {
    this.imagemEl.nativeElement.style.backgroundImage = `url("${this.carro.imagem}")`;
  }

  public aplicarDesconto(desconto: number): void {
    if (this.carro.valor !== undefined && !this.descontoAplicado) {
      this.carro.valor = this.carro.valor - this.carro.valor * desconto;
      this.descontoAplicado = true;
    }
  }

}
