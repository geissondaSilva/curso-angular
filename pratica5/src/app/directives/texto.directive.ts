import { Directive, ElementRef, HostBinding, HostListener, OnInit } from '@angular/core';
import { Texto } from '../core/texto';

@Directive({
  selector: '[appTexto]',
})
export class TextoDirective implements OnInit {

  @HostBinding('style.color')
  public color: any;

  @HostBinding('title')
  public title = '';


  constructor(
    public texto: Texto,
    private element: ElementRef<HTMLLabelElement>
  ) { }

  ngOnInit(): void {
    this.texto.registrarEscopo(this);
    console.log(this.element);
  }

  @HostListener('mouseover')
  public over(): void {
    this.color = 'orange';
  }

}
