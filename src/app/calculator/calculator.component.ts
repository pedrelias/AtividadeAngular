import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  currentInput: string = '';
  previousInput: string = '';
  operator: string = '';
  result: string = '';

  onKeyPress(value: string) {
    if (value === 'C') {
      this.clear();
    } else if (value === '=') {
      this.calculate();
    } else if (['+', '-', '*', '/'].includes(value)) {
      this.setOperator(value);
    } else {
      this.appendNumber(value);
    }
  }

  appendNumber(value: string) {
    this.currentInput += value;
  }

  setOperator(op: string) {
    if (this.currentInput === '') return;
    this.operator = op;
    this.previousInput = this.currentInput;
    this.currentInput = '';
  }

  calculate() {
    if (this.operator === '' || this.currentInput === '' || this.previousInput === '') return;

    const prev = parseFloat(this.previousInput);
    const current = parseFloat(this.currentInput);

    switch (this.operator) {
      case '+':
        this.result = (prev + current).toString();
        break;
      case '-':
        this.result = (prev - current).toString();
        break;
      case '*':
        this.result = (prev * current).toString();
        break;
      case '/':
        this.result = (prev / current).toString();
        break;
    }

    this.currentInput = this.result;
    this.operator = '';
    this.previousInput = '';
  }

  clear() {
    this.currentInput = '';
    this.previousInput = '';
    this.operator = '';
    this.result = '';
  }
}
