import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HomeService } from './home.service';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';

describe('O component Home', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [
        CommonModule,
        HomeRoutingModule,
        SharedModule,
        HttpClientTestingModule
      ],
      providers: [HomeService]
    }).compileComponents();

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('deve ser Criado', () => {
    expect(component).toBeTruthy();
  });



});
