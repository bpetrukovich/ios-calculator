export class CalculatorLogic {
  _a = null;
  _b = null;
  _operator = null;
  _result = null;

  getResult() {
    console.log(this._a);
    console.log(this._b);
    console.log(this._operator);
    this._calculate();
    return this._result;
  }

  pushOperand(number) {
    if (this._a === null) {
      this._a = number;
    } else {
      this._b = number;
    }
  }

  multiply() {}

  devide() {}

  subtract() {}

  add() {
    this._operator = "+";
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
    this._result = null;
  }
}
