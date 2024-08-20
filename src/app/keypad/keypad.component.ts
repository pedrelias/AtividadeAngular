import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-keypad',
  standalone: true,
  templateUrl: './keypad.component.html',
  styleUrls: ['./keypad.component.css'],
})
export class KeypadComponent {
  @Output() keyPress = new EventEmitter<string>();

  onButtonClick(value: string) {
    this.keyPress.emit(value);
  }
}
