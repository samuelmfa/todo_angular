import { ApiService } from './../../services/api.service';
import { Component, OnInit, Output } from '@angular/core';
import { Tarefa } from '../../models/tarefa.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card-formulario',
  templateUrl: './card-formulario.component.html',
  styleUrls: ['./card-formulario.component.scss']
})
export class CardFormularioComponent implements OnInit {

  // tslint:disable-next-line:no-output-rename
  @Output('atualizar')
  atualizar = new EventEmitter();

  public formulario: FormGroup;
  public listaTarefas: Tarefa[];

  constructor(
    public fb: FormBuilder,
    public apiService: ApiService
  ) { }

  ngOnInit(): void {

    this.formulario = this.fb.group({
      id: [''],
      nome: ['', Validators.required],
      status: [''],
    });

  }

  salvarTarefa(): void {
    this.formulario.patchValue({
      status: 'inicio'
    });
    this.apiService.salvarTarefa(this.formulario.value).subscribe(() => {
      this.formulario.reset();
      this.atualizar.emit({ acao: 'atualizar' });
    }, error => console.log(error)
    );
  }

}
