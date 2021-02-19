import { Component, OnInit } from '@angular/core';
import { PesquisaService } from 'src/app/services/pesquisa.service';

@Component({
  selector: 'app-barra-pesquisa',
  templateUrl: './barra-pesquisa.component.html',
  styleUrls: ['./barra-pesquisa.component.css'],
  providers: [PesquisaService]
})
export class BarraPesquisaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
