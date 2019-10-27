import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo.model';
import { TodoServiceService } from '../todo-service.service';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {
  todos : Todo[] = [];

  constructor(private todoService : TodoServiceService) {
    todoService.todos.subscribe(items => this.todos = items);
  }

  ngOnInit() {
  }

  add() {
    this.todoService.addTodo({ title : 'Teste'});
  }

}
