import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Animais } from '../model/animais';

@Injectable({
  providedIn: 'root'
})
export class AnimaisService {

  constructor(private http: HttpClient) { }

  readonly apiAnimais: string = 'http://localhost:3000/animais'

  getAnimais(): Observable<Animais[]>{
    return this.http.get<Animais[]>(`${this.apiAnimais}`)
  }
}
