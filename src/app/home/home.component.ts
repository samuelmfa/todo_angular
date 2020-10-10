import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { Tarefa } from './../models/tarefa.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public formulario: FormGroup;
  public listaTarefas: Tarefa[];

  constructor(
    public fb: FormBuilder,
    private homeService: HomeService
  ) { }

  ngOnInit(): void {
    this.formulario = this.fb.group({
      id: [''],
      nome: ['', Validators.required],
      status: [''],
    });
    this.homeService.buscarTarefas().subscribe((resp: any) => {
      this.listaTarefas = resp;
    }, erro => console.log(erro));
  }

  buscarTarefas() {
    this.homeService.buscarTarefas().subscribe((resposta: any) => {
      this.listaTarefas = resposta;
    });
  }

  salvarTarefa(): void {
    this.formulario.patchValue({
      status: 'inicio'
    });
    this.homeService.salvarTarefa(this.formulario.value).subscribe(() => {
      this.buscarTarefas();
      this.formulario.reset();

    }, error => console.log(error)
    );
  }

  editarTarefa(tarefa: Tarefa, status: string): void {
    tarefa.status = status;
    this.homeService.editarTarefa(tarefa).subscribe(() => {

      this.buscarTarefas();
    }, error => console.log(error));

  }

  excluirTarefa(tarefa: Tarefa): void {
    this.homeService.excluirTarefa(tarefa).subscribe(() => {
      this.buscarTarefas();
    }, error => console.log(error));
  }


}
