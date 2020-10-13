import { ApiService } from './../services/api.service';
import { HomeService } from './home.service';
import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { SharedModule } from '../shared/shared.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Observable, of } from 'rxjs';
import { Tarefa } from '../models/tarefa.model';

describe('O Serviço HomeService', () => {

  let apiService: ApiService;
  let service: HomeService;
  let mockObservableTarefa: Observable<any>;

  const tarefa: Tarefa = {
    id: '1',
    nome: 'teste',
    status: 'inicio'
  };

  const tarefaEditada = { getData: (): Observable<object> => of({ id: '1', nome: 'teste', status: 'concluido' }) };
  const tarefaMock = { id: '1', nome: 'teste', status: 'concluido' };

  // tslint:disable-next-line:max-line-length
  const evento = [{ tarefa, acao: 'concluido' }, { tarefa, acao: 'inicio' }, { tarefa, acao: 'excluir' }, { tarefa, acao: 'atualizar' }, { tarefa: '', acao: '' }];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule, HttpClientTestingModule],
      providers: [HomeService, ApiService],
    });
    service = TestBed.get(HomeService);
    apiService = TestBed.get(ApiService);
  });

  it('O servico deve ser criado', () => {
    expect(service).toBeTruthy();
  });

  it('deve executar a ação selecionada', fakeAsync(() => {

    spyOn(service, 'buscarTarefas').and.returnValue(mockObservableTarefa);
    spyOn(service, 'editarTarefa').and.returnValue(mockObservableTarefa);
    spyOn(service, 'excluirTarefa').and.returnValue(mockObservableTarefa);

    evento.forEach((elemento) => {
      const resultado = service.recebeAcao(elemento);
      expect(resultado).toEqual(mockObservableTarefa);
    });
    tick();
  }));

  it('deve editar uma tarefa', fakeAsync(() => {

    spyOn(apiService, 'editarTarefa').and.callFake(() => tarefaEditada.getData());

    service.editarTarefa(tarefa, 'concluido').subscribe((resp) => {
      expect(resp).toEqual(tarefaMock);
    });
    tick();
  }));

  it('deve excluir uma Tarefa', fakeAsync(() => {

    spyOn(apiService, 'excluirTarefa').and.callFake(() => tarefaEditada.getData());

    service.excluirTarefa(tarefa).subscribe((resp) => {
      expect(resp).toEqual(tarefaMock);
    });
    tick();
  }));

});
