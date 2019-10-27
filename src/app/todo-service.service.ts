import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {
  private _todos: BehaviorSubject<Todo[]> = new BehaviorSubject([]);
  private items : Todo[] = [];
  public readonly todos: Observable<Todo[]> = this._todos.asObservable();

  constructor() {
    this.items = [{ title : 'Todo 1' }, { title : 'Todo 2' }, { title : 'Todo 3' }];
    this._todos.next(this.items);
  }

  addTodo(todo : Todo) {
    this.items.push(todo);
    this._todos.next(this.items);
  }
}