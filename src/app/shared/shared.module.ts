import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

@NgModule({
  declarations: [],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    ModalModule,
    TooltipModule.forRoot()
  ],
  exports: [
    ReactiveFormsModule,
    FormsModule,
    ModalModule,
    TooltipModule
  ]
})
export class SharedModule { }
