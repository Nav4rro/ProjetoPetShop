import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produtos } from '../model/produtos';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(private http: HttpClient) { }

  readonly apiProdutos: string = 'http://localhost:3000/produtos'


  getAllProdutos(): Observable<Produtos[]>{
    return this.http.get<Produtos[]>(`${this.apiProdutos}`)
  }
}
