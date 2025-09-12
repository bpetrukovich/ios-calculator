import { CalculatorLogic } from "./calculator-logic";

export class CalculatorApp {
  number = "";

  constructor() {
    this.calculator = new CalculatorLogic();
  }

  getScreen() {
    return this.number;
  }

  clickZero() {
    this._clickNumber(0);
  }

  _clickNumber(number) {
    this.number += number;
  }
}
