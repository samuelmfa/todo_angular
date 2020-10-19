import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { Tarefa } from './../models/tarefa.model';

export interface Dados {
  perfilA: string;
  perfilB: string;
  valorAlcada: number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  public listaTarefas: Tarefa[] | any;
  public retornoUrl: any;
  public chave = "url.hub.teste2";
  public linkUrl: string;

  public dados: Dados[] = [
    {
      perfilA: 'RH',
      perfilB: 'RH',
      valorAlcada: 1000

    },
    {
      perfilA: 'FINACEIRO',
      perfilB: 'DIRETORIA',
      valorAlcada: 3000

    },
    {
      perfilA: 'MARKETING',
      perfilB: 'DIRETORIA',
      valorAlcada: 6000

    },
    {
      perfilA: 'COMERCIAL',
      perfilB: 'RH',
      valorAlcada: 5000

    },

    {
      perfilA: 'MARKETING',
      perfilB: 'DIRETORIA',
      valorAlcada: 6000

    },
  ];

  constructor(
    public homeService: HomeService,
  ) { }

  ngOnInit(): void {
    this.buscarTarefas();
    let result = this.validaDados(this.dados);
    console.log(result);
    this.buscaValorJson();
  }

  validaDados(dados: Dados[]): boolean {
    let resultado = false;
    let valores: Dados[] = [];

    dados.forEach((comparador) => {
      const valida = valores.find(elemento => elemento.perfilA === comparador.perfilA && elemento.perfilB === comparador.perfilB);

      if (valida === undefined) {
        valores.push(comparador);

      } else {
        resultado = true;
      }
    });
    return resultado;

  }

  buscarTarefas(): void {
    this.homeService.buscarTarefas().subscribe((resposta: any) => {
      this.listaTarefas = resposta;
    }, erro => console.log(erro));

  }
  recebeAcao($event) {
    this.homeService.recebeAcao($event).subscribe(() => this.buscarTarefas());

  }

  buscaValorJson() {
    this.homeService.getUrl().subscribe((resp: any) => {
      console.log(this.carregaValor(resp, this.chave));
    });
  }

  carregaValor(lista: any, chave: string) {
    return this.linkUrl = lista[chave];
  }

}
