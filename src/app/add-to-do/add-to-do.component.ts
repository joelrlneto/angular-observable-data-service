import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { TodoServiceService } from '../todo-service.service';
import { Todo } from '../todo.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-to-do',
  templateUrl: './add-to-do.component.html',
  styleUrls: ['./add-to-do.component.css']
})
export class AddToDoComponent implements OnInit {
  form : FormGroup;

  constructor(private todoService : TodoServiceService, private router : Router) {
    this.form = new FormGroup({
      'title' : new FormControl(null)
    })
  }

  ngOnInit() {
  }

  save() {
    let todo = new Todo();
    todo.title = this.form.get('title').value;
    this.todoService.addTodo(todo);
    this.router.navigate(['']);
  }

}
