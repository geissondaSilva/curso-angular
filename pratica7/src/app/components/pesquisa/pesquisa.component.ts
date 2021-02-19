import { Component, OnInit } from '@angular/core';
import { PesquisaService } from 'src/app/services/pesquisa.service';

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.css']
})
export class PesquisaComponent implements OnInit {

  constructor(
    private pesquisa: PesquisaService
  ) { }

  ngOnInit(): void {
  }

}
