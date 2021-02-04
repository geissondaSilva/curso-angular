import { Directive, HostBinding, OnInit } from '@angular/core';
import { Texto } from '../core/texto';

@Directive({
  selector: '[appTexto]',
})
export class TextoDirective implements OnInit {

  @HostBinding('style.color')
  public color: any;


  constructor(public texto: Texto) { }

  ngOnInit(): void {
    this.texto.registrarEscopo(this);
  }

}
