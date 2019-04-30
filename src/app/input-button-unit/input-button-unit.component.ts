import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  template: `
    <input #inputElementRef
      [value]="title"
      (keyup.enter)="changeTitle($event.target.value)">

    <button (click)="changeTitle(inputElementRef.value)">
      <i class="fas fa-plus"></i>
    </button>
  `,
  styleUrls: ['./input-button-unit.component.css']
})
export class InputButtonUnitComponent implements OnInit {
  title = 'Hello World';

  constructor() {
    console.log('in constructor');
  }

  ngOnInit() {
  }

  changeTitle(newTitle: string) {
    // console.log('in changeTitle');
    this.title = newTitle;
  }

}
