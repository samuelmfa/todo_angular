import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Tarefa } from '../models/tarefa.model';
import { ApiService } from './../services/api.service';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Store } from '../store/todo.store';

@Injectable()
export class HomeService extends ApiService {

  public urlJson = '../../static/url.json';

  constructor(
    public apiService: ApiService,
    public http: HttpClient,
    public store: Store
  ) {
    super(http, store);
   }

  public recebeAcao(evento: any) {
    switch (evento.acao) {
      case ('concluido'):
        return this.editarTarefaApi(evento.tarefa, 'concluido');
      case ('inicio'):
        return this.editarTarefaApi(evento.tarefa, 'inicio');
      case ('excluir'):
        return this.excluirTarefa(evento.tarefa);
      case ('atualizar'):
        return this.buscarTarefas();
      default:
        break;
    }
  }

  public buscarTarefas(): Observable<any> {
    return this.apiService.buscarTarefas();
  }

  public editarTarefaApi(tarefa: Tarefa, status: string): Observable<any> {
    tarefa.status = status;
    return this.apiService.editarTarefa(tarefa).pipe(map((response: any) => response));
  }

  public excluirTarefa(tarefa: Tarefa): Observable<any> {
    return this.apiService.excluirTarefa(tarefa).pipe(map((response: any) => response));
  }

  public getUrl() {
    return this.http.get(this.urlJson, this.header);

  }

}
