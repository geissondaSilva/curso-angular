import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public token: string;

  constructor(
    private http: HttpClient
  ) { }

  public logar(login: any) {
    const api = environment.api + `/auth`;
    return this.http.post(api, login);
  }

  public cadastrar(usuario: Usuario): Observable<any> {
    const api = environment.api + '/auth/singin';
    return this.http.post(api, usuario);
  }
}
