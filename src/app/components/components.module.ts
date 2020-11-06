import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CardTarefasComponent } from './card-tarefas/card-tarefas.component';
import { CardFormularioComponent } from './card-formulario/card-formulario.component';

import { ApiService } from '../services/api.service';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NavBarComponent, CardTarefasComponent, CardFormularioComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    SharedModule,
    NavBarComponent,
    CardTarefasComponent,
    CardFormularioComponent
  ],
  providers: [ApiService]
})
export class ComponentsModule { }
