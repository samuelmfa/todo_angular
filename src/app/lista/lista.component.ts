import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Store } from '../store/todo.store';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  public lista$: Observable<any>;

  constructor(
    public store: Store
  ) { }

  ngOnInit(): void {

  }

  lerDaStore() {
    this.lista$ = this.store.getTodoList().pipe(map(resp => resp));
    this.lista$.subscribe(resp => console.log(resp));
  }

}
