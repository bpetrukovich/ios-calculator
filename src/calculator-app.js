import { CalculatorLogic } from "./calculator-logic";
import { eventEmitter } from "./event-emitter";

export class CalculatorApp {
  _number = "0";

  constructor() {
    this.calculator = new CalculatorLogic();
  }

  clickZero() {
    if (this._number === "0") {
      return;
    }

    this._clickNumber("0");
  }

  clickOne() {
    this._clickNonZero("1");
  }

  clickTwo() {
    this._clickNonZero("2");
  }

  clickThree() {
    this._clickNonZero("3");
  }

  clickFour() {
    this._clickNonZero("4");
  }

  clickFive() {
    this._clickNonZero("5");
  }

  clickSix() {
    this._clickNonZero("6");
  }

  clickSeven() {
    this._clickNonZero("7");
  }

  clickEight() {
    this._clickNonZero("8");
  }

  clickNine() {
    this._clickNonZero("9");
  }

  clickDevide() {}

  clickMultiply() {}

  clickSubtract() {}

  clickAdd() {}

  clickEqual() {}

  clickClear() {
    this._number = "0";
    this._changeDisplay();
  }

  clickClearAll() {
    this._number = "0";
    this._changeDisplay();
  }

  clickPercent() {}

  clickComma() {}

  clickSign() {
    this._number = "-" + this._number;
    this._changeDisplay();
  }

  _clickOperation() {
    this._number = "0";
  }

  _clickNonZero(number) {
    this._eraseLeadingZero();
    this._clickNumber(number);
  }

  _eraseLeadingZero() {
    if (this._number === "0") {
      this._number = "";
    }
  }

  _clickNumber(number) {
    this._number += number;
    this._changeDisplay();
  }

  _changeDisplay() {
    const changeDisplayEvent = new CustomEvent("changeDisplay", {
      detail: this._number,
    });
    eventEmitter.dispatchEvent(changeDisplayEvent);
  }
}
