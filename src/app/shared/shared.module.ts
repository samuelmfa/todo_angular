import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    ModalModule,
    HttpClientModule,
    TooltipModule.forRoot()
  ],
  exports: [
    ReactiveFormsModule,
    FormsModule,
    ModalModule,
    TooltipModule,
    HttpClientModule
  ]
})
export class SharedModule { }
