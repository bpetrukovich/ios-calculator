import { CalculatorButton } from "./calculator-button";
import { THEME } from "./theme";

export class NumberCalculatorButton extends CalculatorButton {
  constructor(number, handler) {
    super(number.toString(), THEME.numbers, handler); // TODO: null here
  }
}
