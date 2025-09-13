import { CalculatorLogic } from "./calculator-logic";
import { eventEmitter } from "./event-emitter";
import { Formatter } from "./formatter";

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

  clickComma() {
    this._clickNumberWithoutErasingLeadingZero(",");
  }

  clickDivide() {
    this._clickOperation((input) => this._calculator.pushAndDivide(input));
  }

  clickMultiply() {
    this._clickOperation((input) => this._calculator.pushAndMultiply(input));
  }

  clickSubtract() {
    this._clickOperation((input) => this._calculator.pushAndSubtract(input));
  }

  clickAdd() {
    this._clickOperation((input) => this._calculator.pushAndAdd(input));
  }

  clickEquals() {
    this._clickOperation((input) => this._calculator.pushAndEquals(input));
  }

  _clickOperation(handler) {
    const formattedInput = Formatter.formatToCalculator(this._input);
    handler(formattedInput);
    this._tryGetResultAndReset();
  }

  clickClear() {
    // TODO: duplication
    this._resetInput();
    this._changeDisplay();
  }

  clickClearAll() {
    // TODO: realize in ui
    this._resetInput();
    this._changeDisplay();
    this._calculator.clear();
  }

  clickPercent() {
    this._input = Formatter.formatFromCalculator(
      this._calculator.getPercent(Formatter.formatToCalculator(this._input)),
    );
    this._changeDisplay();
  }

  clickSign() {
    if (this._input[0] === "-") {
      this._input = this._input.slice(1);
    } else {
      this._input = "-" + this._input;
    }
    this._changeDisplay();
  }

  _tryGetResult() {
    if (this._calculator.isHaveResult()) {
      const output = this._calculator.getResult();
      this._input = Formatter.formatFromCalculator(output);
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

  _eraseLeadingZero() {
    if (this._input === "0") {
      this._input = "";
    }
  }

  _clickNumber(number) {
    this._eraseLeadingZero();
    this._clickNumberWithoutErasingLeadingZero(number);
  }

  _clickNumberWithoutErasingLeadingZero(number) {
    this._input += number;
    console.log(this._input);
    this._changeDisplay();
  }

  _changeDisplay() {
    const CHANGE_DISPLAY_EVENT = "changeDisplay";
    eventEmitter.emit(CHANGE_DISPLAY_EVENT, this._input);
  }
}
