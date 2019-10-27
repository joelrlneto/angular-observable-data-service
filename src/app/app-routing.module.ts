import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddToDoComponent } from './add-to-do/add-to-do.component';
import { ListTodosComponent } from './list-todos/list-todos.component';


const routes: Routes = [
  { path : 'add', component : AddToDoComponent },
  { path : '', component : ListTodosComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
