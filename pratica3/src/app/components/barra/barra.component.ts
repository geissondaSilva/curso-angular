import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: '.barra, .nav-bar',
    templateUrl: './barra.component.html',
    styleUrls: ['./barra.component.css'],
    viewProviders: [],
    inputs: ['title:titulo'],
    encapsulation: ViewEncapsulation.None
})
export class BarraComponent implements OnInit {

    public title: string = '';

    constructor() { }

    ngOnInit(): void {
    }

}
