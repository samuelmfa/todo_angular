import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaRoutingModule } from './lista-routing.module';
import { ListaService } from './lista.service';
import { ListaComponent } from './lista.component';
import { ComponentsModule } from '../components/components.module';


@NgModule({
  declarations: [ListaComponent],
  imports: [
    CommonModule,
    ListaRoutingModule,
    ComponentsModule
  ],
  providers: [ListaService]
})
export class ListaModule { }
