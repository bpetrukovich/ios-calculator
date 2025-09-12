import { THEME } from "./theme";

export class CalculatorButton {
  constructor(text, color, handler) {
    this.text = text;
    this.color = color;
    this.handler = handler;
  }

  createButton() {
    const button = document.createElement("button");
    button.innerText = this.text;
    button.style.backgroundColor = this.color;
    button.style.color = THEME.text;
    button.addEventListener("click", this.handler);
    return button;
  }
}
