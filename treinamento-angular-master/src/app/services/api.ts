import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export class Api<T> {

    public url: string;

    constructor(
        public http: HttpClient,
        public path: string
    ) {
        this.url = environment.api + '/' + path;
    }

    public criar(obj: T): Observable<T> {
        return this.http.post<T>(this.url, obj);
    }

    public ler(id: number): Observable<T> {
        return this.http.get<T>(this.url + '/' + id);
    }

    public alterar(obj: T, id: number): Observable<T> {
        return this.http.put<T>(`${this.url}/${id}`, obj);
    }

    public deletar(id: number): Observable<void> {
        return this.http.delete<void>(`${this.url}/${id}`);
    }
}
