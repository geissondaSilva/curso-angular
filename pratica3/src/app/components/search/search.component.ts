import { Component, EventEmitter, OnInit } from '@angular/core';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  outputs: ['pesquisar']
})
export class SearchComponent implements OnInit {

  public pesquisar: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public onPesquisar() {
    this.pesquisar.emit('Texto para minha pesquisa')
  }

}
