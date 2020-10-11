import { Tarefa } from './../models/tarefa.model';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { SharedModule } from '../shared/shared.module';
import { ApiService } from './api.service';
import { of } from 'rxjs';

describe('O service ApiService', () => {

  let service: ApiService;
  let httpMock: HttpTestingController;
  let tarefas: Tarefa[];
  let tarefa: Tarefa;

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

  it('deve buscar a lista de Tarefas no Backend', () => {
    service.buscarTarefas().subscribe((resposta) => {
      expect(resposta).toBe(of(tarefas));
    });
  });

  it('deve Salvar uma Tarefa', fakeAsync(() => {
    service.salvarTarefa({
      id: '',
      nome: 'teste',
      status: 'iniciado'
    }).subscribe((resposta) => {
      expect(resposta).toBe({
        id: '',
        nome: 'teste',
        status: 'iniciado'
      });

    });
    tick();
  }));


});
