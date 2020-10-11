import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTarefasComponent } from './card-tarefas.component';

describe('O component Card Tarefas', () => {
  let component: CardTarefasComponent;
  let fixture: ComponentFixture<CardTarefasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardTarefasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardTarefasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve Ser Criado', () => {
    expect(component).toBeTruthy();
  });
});
