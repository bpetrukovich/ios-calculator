export class CalculatorButton {
  constructor(handler) {
    this.handler = handler;
  }

  createButton() {
    const button = document.createElement("button");
    button.addEventListener("click", this.handler);
    return button;
  }
}
