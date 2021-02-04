import { Injectable } from '@angular/core';
import { TextoDirective } from '../directives/texto.directive';

@Injectable()
export class Texto {

    private contexto: TextoDirective;

    public _value = 'Texto';
    public _cor = 'black';

    public registrarEscopo(escopo: TextoDirective): void {
        this.contexto = escopo;
    }

    public set cor(value: string) {
        this._cor = value;
        this.contexto.color = value;
    }
}
