import { Component, OnInit } from '@angular/core';
import { Texto } from 'src/app/core/texto';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  constructor(
    public texto: Texto
  ) { }

  ngOnInit(): void {
  }

}
