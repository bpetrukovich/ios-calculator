import { CalculatorButton } from "./calculator-button";
import { THEME } from "./theme";

export class NumberCalculatorButton extends CalculatorButton {
  constructor(number) {
    super(number.toString(), THEME.numbers, null); // TODO: null here
  }
}
