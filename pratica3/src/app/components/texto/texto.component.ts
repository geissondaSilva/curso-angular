import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'h3, .teste',
  templateUrl: './texto.component.html',
  styleUrls: ['./texto.component.css']
})
export class TextoComponent implements OnInit {

  constructor(
    private element: ElementRef<HTMLElement>
  ) { }

  ngOnInit(): void {
    this.element.nativeElement.style.backgroundColor = 'red';
  }

}
