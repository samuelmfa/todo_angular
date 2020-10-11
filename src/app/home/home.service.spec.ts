import { ApiService } from './../services/api.service';

import { HomeService } from './home.service';
import { TestBed } from '@angular/core/testing';
import { SharedModule } from '../shared/shared.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('O Serviço HomeService', () => {

  let service: HomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule, HttpClientTestingModule],
      providers: [HomeService, ApiService],
    });
    service = TestBed.get(HomeService);
  });

  it('O servico deve ser criado', () => {
    expect(service).toBeTruthy();
  });

});
