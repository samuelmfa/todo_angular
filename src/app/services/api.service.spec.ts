import { Tarefa } from './../models/tarefa.model';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { SharedModule } from '../shared/shared.module';
import { ApiService } from './api.service';

describe('O service ApiService', () => {

  const tarefas: Tarefa[] = [
    {
      id: '1',
      nome: 'teste',
      status: 'iniciado'
    },
    {
      id: '2',
      nome: 'teste2',
      status: 'iniciado'
    },
  ];

  const tarefa: Tarefa = {
    id: '',
    nome: 'teste',
    status: 'iniciado'
  };

  let service: ApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule, HttpClientTestingModule],
      providers: [ApiService]
    });
    service = TestBed.get(ApiService);
    httpMock = TestBed.get(HttpTestingController);

  });


  it('deve ser criado', () => {
    expect(service).toBeTruthy();
  });

  it('deve buscar a lista de Tarefas no Backend', fakeAsync(() => {

    service.buscarTarefas().subscribe((resposta) => expect(resposta).toEqual(tarefas));

    const request = httpMock.expectOne((req) => req.method === 'GET');
    request.flush(tarefas);
    tick();

  }));


  it('deve Salvar uma Tarefa', fakeAsync(() => {
    service.salvarTarefa(tarefa).subscribe((resposta) => expect(resposta).toBe(tarefa));

    const request = httpMock.expectOne((req) => req.method === 'POST');
    request.flush(tarefa);
    tick();

  }));

  it('deve editar uma tarefa', fakeAsync(() => {

    const tarefa1 = {
      id: '1',
      nome: 'teste2',
      status: 'iniciado'
    };

    service.editarTarefa({ id: '1', nome: 'teste2', status: 'iniciado' })
      .subscribe((resposta) => expect(resposta).toEqual(tarefa1));

    const request = httpMock.expectOne((req) => req.method === 'PUT');
    request.flush(tarefa1);
    tick();

  }));

  it('deve exclui uma tarefa', fakeAsync(() => {

    service.excluirTarefa(tarefa).subscribe((resposta) => expect(resposta).toEqual(tarefa));

    const request = httpMock.expectOne((req) => req.method === 'DELETE');
    request.flush(tarefa);
    tick();
  }));

});
