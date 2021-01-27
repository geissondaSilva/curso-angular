import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.css'],
})
export class PesquisaComponent implements OnInit {

  public valorInput = '';

  @Output()
  public pesquisar: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public pressionarTecla(event: any): void {
    if (event.keyCode === 13 && this.valorInput) {
      this.pesquisar.emit(this.valorInput);
    }
  }

}
