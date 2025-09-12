import { CalculatorLogic } from "./calculator-logic";

export class CalculatorApp {
  number = "0";

  constructor() {
    this.calculator = new CalculatorLogic();
  }

  // TODO: maybe events
  getScreen() {
    return this.number;
  }

  clickZero() {
    this._clickNumber(0);
  }

  clickOne() {
    this._clickNumber(1);
  }

  clickTwo() {
    this._clickNumber(2);
  }

  clickThree() {
    this._clickNumber(3);
  }

  clickFour() {
    this._clickNumber(4);
  }

  clickFive() {
    this._clickNumber(5);
  }

  clickSix() {
    this._clickNumber(6);
  }

  clickSeven() {
    this._clickNumber(7);
  }

  clickEight() {
    this._clickNumber(8);
  }

  clickNine() {
    this._clickNumber(9);
  }

  _clickNumber(number) {
    this.number += number;
  }
}
