import { Tarefa } from './../../models/tarefa.model';
import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card-tarefas',
  templateUrl: './card-tarefas.component.html',
  styleUrls: ['./card-tarefas.component.scss']
})
export class CardTarefasComponent implements OnInit {

  // tslint:disable-next-line:no-input-rename
  @Input('tipo')
  tipo: any;
  // tslint:disable-next-line:no-input-rename
  @Input('lista-tarefas')
  listaDeTarefas: Tarefa[];

  // tslint:disable-next-line:no-input-rename
  @Input('titulo') titulo = { andamento: false, concluido: false };

  // tslint:disable-next-line:no-output-rename
  @Output('acao') acao = new EventEmitter();

  // tslint:disable-next-line:no-output-rename
  @Output('excluir')
  excluir: any;

  constructor() { }

  ngOnInit(): void {
  }

  editarTarefa(tarefa: Tarefa, acao: string) {
    this.acao.emit({ acao, tarefa });
  }

  excluirTarefa(tarefa, acao: string) {
    this.acao.emit({ acao, tarefa });

  }

}
