import { ApiService } from './../../services/api.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule } from 'src/app/shared/shared.module';

import { CardFormularioComponent } from './card-formulario.component';

describe('O component Card Formulario', () => {
  let component: CardFormularioComponent;
  let fixture: ComponentFixture<CardFormularioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
      providers: [ApiService],
      declarations: [CardFormularioComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve ser Criado', () => {
    expect(component).toBeTruthy();
  });
});
