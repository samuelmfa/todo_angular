import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { Tarefa } from './../models/tarefa.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public listaTarefas: Tarefa[] | any;

  constructor(
    public homeService: HomeService,
  ) { }

  ngOnInit(): void {
    this.buscarTarefas();
  }

  buscarTarefas(): void {
    this.homeService.buscarTarefas().subscribe((resposta: any) => {
      this.listaTarefas = resposta;
    }, erro => console.log(erro));

  }
  recebeAcao($event) {
    this.homeService.recebeAcao($event).subscribe(() => this.buscarTarefas());

  }


}
