import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.css']
})
export class EmpresaComponent {

  public form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.criarForm();
  }

  public criarForm(): void {
    this.form = this.fb.group({
      razaoSocial: [null, Validators.required],
      fantasia: [null, Validators.required],
      cnpj: [null, Validators.required],
    });
  }

  public get razaoSocial() {
    return this.form.get('razaoSocial');
  }

  public get fantasia() {
    return this.form.get('fantasia');
  }

  public get cnpj() {
    return this.form.get('cnpj');
  }

  public salvar() {
    if (this.form.valid) {

    }
  }
}
