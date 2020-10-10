import { Tarefa } from './../models/tarefa.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HomeService {

  public header = {
    headers: new HttpHeaders({
      'Content-type': 'application/json'
    })
  };

  protected API_URL = 'https://5f6cad8834d1ef0016d586f7.mockapi.io/api/v1/dados/todo';

  constructor(public http: HttpClient) { }

  buscarTarefas(): Observable<any> {
    return this.http.get(`${this.API_URL}`, this.header);
  }

  salvarTarefa(tarefa: Tarefa) {
    return this.http.post(`${this.API_URL}`, tarefa, this.header);
  }

  editarTarefa(tarefa: Tarefa) {
    return this.http.put(`${this.API_URL}/${tarefa.id}`, tarefa, this.header);
  }

  excluirTarefa(tarefa: Tarefa) {
    return this.http.delete(`${this.API_URL}/${tarefa.id}`, this.header);
  }


}
