import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Contato } from '../../models/contato';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  public contato: Contato = {};

  public form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      nome: new FormControl(),
      email: new FormControl(),
      mensagem: new FormControl(),
    });
  }

  ngOnInit(): void {
  }

  public enviar() {
    console.log(this.contato);
    alert('COntato enviado com sucesso!');
  }

}
