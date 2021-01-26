import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-tollbar',
    templateUrl: './tollbar.component.html',
    styleUrls: ['./tollbar.component.css']
})
export class TollbarComponent implements OnInit {

    public tituloTela: string = 'Loja de carros';
    
    constructor() { }

    ngOnInit(): void { }
}
