import { CalculatorApp } from "./calculator-app";
import { eventEmitter } from "./event-emitter";
import "./style.css";
import { ButtonLayout } from "./ui/button-layout";
import { CalculatorButton } from "./ui/calculator-button";
import { NumberCalculatorButton } from "./ui/number-calculator-button";
import { THEME } from "./ui/theme";

eventEmitter.on("changeDisplay", (input) => {
  document.querySelector("#display").innerText = input;
});
// new ButtonLayout();
const app = new CalculatorApp();

class UI {
  constructor() {
    this.numbers = [];
    this.numbers.push(new NumberCalculatorButton(0, () => app.clickZero()));
    this.numbers.push(new NumberCalculatorButton(1, () => app.clickOne()));
    this.numbers.push(new NumberCalculatorButton(2, () => app.clickTwo()));
    this.numbers.push(new NumberCalculatorButton(3, () => app.clickThree()));
    this.numbers.push(new NumberCalculatorButton(4, () => app.clickFour()));
    this.numbers.push(new NumberCalculatorButton(5, () => app.clickFive()));
    this.numbers.push(new NumberCalculatorButton(6, () => app.clickSix()));
    this.numbers.push(new NumberCalculatorButton(7, () => app.clickSeven()));
    this.numbers.push(new NumberCalculatorButton(8, () => app.clickEight()));
    this.numbers.push(new NumberCalculatorButton(9, () => app.clickNine()));

    this.numbers.forEach((button) => {
      document.querySelector("#app").appendChild(button.createButton());
    });

    this.operators = [];
    this.operators.push(
      new CalculatorButton("+", THEME.rightButtons, () => app.clickAdd()),
    );
    this.operators.push(
      new CalculatorButton("-", THEME.rightButtons, () => app.clickSubtract()),
    );
    this.operators.push(
      new CalculatorButton("*", THEME.rightButtons, () => app.clickMultiply()),
    );
    this.operators.push(
      new CalculatorButton("/", THEME.rightButtons, () => app.clickDevide()),
    );

    this.operators.push(
      new CalculatorButton("=", THEME.rightButtons, () => app.clickEquals()),
    );

    this.operators.push(
      new CalculatorButton("+/-", THEME.rightButtons, () => app.clickSign()),
    );

    this.operators.forEach((button) => {
      document.querySelector("#app").appendChild(button.createButton());
    });
  }
}

new UI();
