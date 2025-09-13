export class CalculatorLogic {
  _a = null;
  _b = null;
  _operator = null;
  _result = null;

  isHaveResult() {
    return Number.isFinite(this._result);
  }

  getResult() {
    console.log(this._a);
    console.log(this._b);
    console.log(this._operator);

    return this._result;
  }

  pushOperand(number) {
    console.log("pushOperand", number);

    if (this._a === null) {
      this._a = number;
    } else {
      this._b = number;
    }
  }

  pushOperandEquals(number) {
    if (this._a === null) {
      this._a = number;
    } else if (this._b === null) {
      this._b = number;
    }
  }

  pushAndEquals(number) {
    // TODO: duplication
    this.pushOperandEquals(number);
    if (this._canCalculate()) {
      this._calculate();
      this._rememberA(this._result);
    }
  }

  pushAndMultiply(number) {
    this.pushOperand(number);
    this._applyOperator("*");
  }

  pushAndDivide(number) {
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

  getPercent(number) {
    return number / 100;
  }

  _applyOperator(operator) {
    if (this._canCalculate()) {
      this._calculate();
      this._rememberA(this._result);
    }
    this._operator = operator;
  }

  _rememberA(number) {
    this._a = number;
  }

  _canCalculate() {
    return this._a !== null && this._b !== null && this._operator !== null;
  }

  _calculate() {
    if (this._a === null) {
      throw new Error("No first operand");
    }
    if (this._b === null) {
      throw new Error("No second operand");
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
