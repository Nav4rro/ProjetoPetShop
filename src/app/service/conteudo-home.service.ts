import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConteudoHome } from '../model/conteudo-home';

@Injectable({
  providedIn: 'root'
})
export class ConteudoHomeService {

  constructor( private htpp: HttpClient) { }

  readonly apiConteudoHome: string = 'http://localhost:3000/conteudoHome'

  getAllConteudos(): Observable <ConteudoHome>{
    return this.htpp.get<ConteudoHome>(`${this.apiConteudoHome}`)
  }
}
