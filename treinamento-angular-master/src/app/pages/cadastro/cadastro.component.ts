import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmarSenhaValidator } from 'src/app/validators/confirmar-senha-validator';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  public form: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      nome: [null, Validators.required],
      email: [null, Validators.compose([
        Validators.required,
        Validators.email
      ])],
      senha: [null, Validators.compose([
        Validators.required, ConfirmarSenhaValidator
      ])],
      confirmarSenha: [null, Validators.required]
    });
  }

  ngOnInit() {
  }


  public get senha() {
      return this.form.get('senha');
  }

}
