import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Carro } from 'src/app/models/carro';

@Component({
  selector: 'app-carro',
  templateUrl: './carro.component.html',
  styleUrls: ['./carro.component.css']
})
export class CarroComponent implements OnInit {

  @ViewChild('img', { static: true })
  private imagemEl: ElementRef<HTMLDivElement>;

  @Input() public carro: Carro = {};

  constructor() { }

  ngOnInit(): void {
  }

}
