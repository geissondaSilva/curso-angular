import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FilmesService } from './services/filmes.service';
import { PesquisaService } from './services/pesquisa.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    public filmesMarco: string[] = [];
    public filmesRecebidos: string[] = [];

    private contador = 0;


    public inscricaoCliente: Subscription;

    constructor(
        private service: FilmesService,
    ) {
        this.filmesMarco.push(`A hora do rush`);
        this.filmesMarco.push(`avatar`);
        this.filmesMarco.push(`vingadores`);
        this.filmesMarco.push(`Xmen`);
        this.filmesMarco.push(`Volwerine`);
        this.filmesMarco.push(`Homem aranha`);
        this.filmesMarco.push(`Karate kid`);
    }


    ngOnInit(): void {
        // console.log(`iniciou`, new Date());
        // this.preguicoso().then((value) => {
        //     console.log(`finalizou com sucesso`, value);
        // }).catch(() => {
        //     console.log(`Finalizou com erro`);
        // });
        // console.log(`esta depois do finalizar`);
    }

    public comecarStream(): void {
        setInterval(() => {
            const filme = this.filmesMarco[this.contador];
            this.service.stream.next(filme);
            console.log(filme);
            this.contador++;
        }, 5000);
    }

    // private preguicoso(): Promise<any> {
    //     return new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             resolve(new Date());
    //         }, 3000);
    //     });
    // }


    public assinarNetflix(): void {
        this.inscricaoCliente = this.service.stream.subscribe((filme) => {
            this.filmesRecebidos.push(filme);
        });
    }

    public cancelarAssinatura(): void {
        this.inscricaoCliente.unsubscribe();
    }

}
