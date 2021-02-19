import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

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

  public cadastrar() {}
}
