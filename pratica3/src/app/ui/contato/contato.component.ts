import { Component, OnInit } from '@angular/core';
import { Contato } from '../../models/contato';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  public contato: Contato = {};

  constructor() {
    this.contato.nome = 'Geisson';
    this.contato.email = '';
    this.contato.mensagem = '';
  }

  ngOnInit(): void {
  }

  public enviar() {
    console.log(this.contato);
    alert('COntato enviado com sucesso!');
  }

}
