import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pacote } from '../models/Pacote';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {
  private lsPacotes: Pacote[];
  private url: string = "http://localhost:3000/transferencias";

  constructor(private httpClient: HttpClient) {
    this.lsPacotes = [];
  }

  get transferencias() {
    return this.lsPacotes;
  }

  all():  Observable<Pacote[]> {
    return this.httpClient.get<Pacote[]>(this.url);
  }

  adicionar(pac: Pacote): Observable<Pacote>  {
    return this.httpClient.post<Pacote>(this.url, pac);
  }
}
