import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';

@Component({
  selector: 'app-todo-item',
  template: `
    <div class="todo-item">
      {{ item.title }}
      <button
        class="btn btn-red"
        (click)="removeItem()">
        <i class="fas fa-minus"></i>
      </button>
    </div>
  `,
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() item: TodoItem;

  @Output() remove: EventEmitter<TodoItem> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  removeItem() {
    // console.log('in removeItem');
    this.remove.emit(this.item);
  }

}
