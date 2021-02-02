import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paleta-cor',
  templateUrl: './paleta-cor.component.html',
  styleUrls: ['./paleta-cor.component.css']
})
export class PaletaCorComponent implements OnInit {

  public cor = 'red';

  constructor() { }

  ngOnInit(): void {
  }

}
