import { CalculatorLogic } from "./calculator-logic";
import { eventEmitter } from "./event-emitter";

export class CalculatorApp {
  _input = "0";

  constructor() {
    this._calculator = new CalculatorLogic();
    this._changeDisplay();
  }

  clickZero() {
    this._clickNumber("0");
  }

  clickOne() {
    this._clickNumber("1");
  }

  clickTwo() {
    this._clickNumber("2");
  }

  clickThree() {
    this._clickNumber("3");
  }

  clickFour() {
    this._clickNumber("4");
  }

  clickFive() {
    this._clickNumber("5");
  }

  clickSix() {
    this._clickNumber("6");
  }

  clickSeven() {
    this._clickNumber("7");
  }

  clickEight() {
    this._clickNumber("8");
  }

  clickNine() {
    this._clickNumber("9");
  }

  clickDevide() {
    this._calculator.pushAndDevide(+this._input);
    this._tryGetResultAndReset();
  }

  clickMultiply() {
    this._calculator.pushAndMultiply(+this._input);
    this._tryGetResultAndReset();
  }

  clickSubtract() {
    this._calculator.pushAndSubtract(+this._input);
    this._tryGetResultAndReset();
  }

  clickAdd() {
    this._calculator.pushAndAdd(+this._input);
    this._tryGetResultAndReset();
  }

  clickEquals() {
    this._calculator.pushAndEquals(+this._input);
    this._tryGetResultAndReset();
  }

  clickClear() {
    // TODO: duplication
    this._resetInput();
    this._changeDisplay();
  }

  clickClearAll() {
    this._resetInput();
    this._changeDisplay();
  }

  clickPercent() {}

  clickComma() {}

  clickSign() {
    this._input = "-" + this._input;
    this._changeDisplay();
  }

  _tryGetResult() {
    if (this._calculator.isHaveResult()) {
      this._input = "" + this._calculator.getResult();
      this._changeDisplay();
    }
  }

  _resetInput() {
    this._input = "0";
  }

  _tryGetResultAndReset() {
    this._tryGetResult();
    this._resetInput();
  }

  _clickOperation() {
    this._calculator.pushOperand(+this._input);
    this._number = "0";
  }

  _eraseLeadingZero() {
    if (this._input === "0") {
      this._input = "";
    }
  }

  _clickNumber(number) {
    this._eraseLeadingZero();
    this._input += number;
    this._changeDisplay();
  }

  _changeDisplay() {
    const CHANGE_DISPLAY_EVENT = "changeDisplay";
    eventEmitter.emit(CHANGE_DISPLAY_EVENT, this._input);
  }
}
