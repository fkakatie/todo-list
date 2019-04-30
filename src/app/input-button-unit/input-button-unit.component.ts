import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  template: `
    <input #inputElementRef
      class="todo-input"
      [value]="title"
      (keyup.enter)="submitValue($event.target.value)">

    <button
      class="btn"
      (click)="submitValue(inputElementRef.value)">
      <i class="fas fa-plus"></i>
    </button>
  `,
  styleUrls: ['./input-button-unit.component.css']
})
export class InputButtonUnitComponent implements OnInit {
  title = 'Add a new to do item';

  @Output() submit: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  submitValue(newTitle: string) {
    // console.log('in submitValue');
    this.submit.emit(newTitle);
  }

}
