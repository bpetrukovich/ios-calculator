export class CalculatorLogic {
  _a = null;
  _b = null;
  _operator = null;
  _result = null;

  isHaveResult() {
    return Number.isFinite(this._result);
  }

  getResult() {
    return this._result;
  }

  pushOperand(number) {
    if (this._a === null) {
      this._a = number;
    } else {
      this._b = number;
    }
  }

  pushAndEquals(number) {
    this.pushOperand(number);
    if (this._canCalculate()) {
      this._calculate();
    }
  }

  pushAndMultiply(number) {
    this.pushOperand(number);
    this._applyOperator("*");
  }

  pushAndDevide(number) {
    this.pushOperand(number);
    this._applyOperator("/");
  }

  pushAndSubtract(number) {
    this.pushOperand(number);
    this._applyOperator("-");
  }

  pushAndAdd(number) {
    this.pushOperand(number);
    this._applyOperator("+");
  }

  _applyOperator(operator) {
    this._operator = operator;
    if (this._canCalculate()) {
      this._calculate();
      this._rememberA(this._result);
    }
  }

  _rememberA(number) {
    this._a = number;
  }

  _canCalculate() {
    return this._a !== null && this._b !== null && this._operator !== null;
  }

  _calculate() {
    if (this._a === null || this._b === null) {
      throw new Error("Not enough operands");
    }
    if (this._operator === null) {
      throw new Error("No operator");
    }

    switch (this._operator) {
      case "+":
        this._result = this._a + this._b;
        break;
      case "-":
        this._result = this._a - this._b;
        break;
      case "*":
        this._result = this._a * this._b;
        break;
      case "/":
        this._result = this._a / this._b;
        break;
    }
  }

  _reset() {
    this._a = null;
    this._b = null;
    this._operator = null;
  }
}
