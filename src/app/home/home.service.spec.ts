import { HttpClientModule } from '@angular/common/http';
import { HomeService } from './home.service';
import { TestBed } from '@angular/core/testing';

describe('O Serviço HomeService', () => {

  let service: HomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [HomeService, ],
    });
    service = TestBed.get(HomeService);
  });

  it('O servico deve ser instanciado', () => {
    expect(service).toBeTruthy();
  });

});
