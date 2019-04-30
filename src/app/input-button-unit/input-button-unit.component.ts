import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  template: `
    <input #inputElementRef
      [value]="title"
      (keyup.enter)="submitValue($event.target.value)">

    <button (click)="submitValue(inputElementRef.value)">
      <i class="fas fa-plus"></i>
    </button>
  `,
  styleUrls: ['./input-button-unit.component.css']
})
export class InputButtonUnitComponent implements OnInit {
  title = 'Hello World';

  @Output() submit: EventEmitter<string> = new EventEmitter();

  constructor() {
    console.log('in constructor');
  }

  ngOnInit() {
  }

  submitValue(newTitle: string) {
    // console.log('in submitValue');
    this.submit.emit(newTitle);
  }

}
