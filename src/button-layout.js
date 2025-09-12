import { NumberCalculatorButton } from "./number-calculator-button";

export class ButtonLayout {
  constructor() {
    this.numbers = [];
    for (let i = 0; i <= 9; i++) {
      this.numbers.push(new NumberCalculatorButton(i));
    }

    this.numbers.forEach((button) => {
      document.querySelector("#app").appendChild(button.createButton());
    });
  }
}
