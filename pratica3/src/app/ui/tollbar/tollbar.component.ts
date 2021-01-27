import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-tollbar',
    templateUrl: './tollbar.component.html',
    styleUrls: ['./tollbar.component.css']
})
export class TollbarComponent implements OnInit {

    public tituloTela = 'Loja de carros';

    constructor() { }

    ngOnInit(): void { }

    public quandoPesquisar(valor: string): void {
        console.log(valor);
    }
}
