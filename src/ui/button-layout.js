import { CalculatorButton } from "./calculator-button";

export class ButtonLayout {
  buttons = {};

  constructor() {
    const ids = [
      "button-0",
      "button-1",
      "button-2",
      "button-3",
      "button-4",
      "button-5",
      "button-6",
      "button-7",
      "button-8",
      "button-9",
      "comma",
      "add",
      "subtract",
      "multiply",
      "divide",
      "equals",
      "clear",
      "sign",
      "percent",
    ];

    ids.forEach((id) => {
      this.buttons[id] = new CalculatorButton(id);
    });

    Object.values(this.buttons).forEach((button) => {
      button.addHandler(() => this._unhighlightAll());
    });

    Object.values(this.buttons)
      .filter((button) => button.isHighlightable())
      .forEach((button) => {
        button.addHandler(() => button.highlight());
      });
  }

  addHandler(id, handler) {
    if (!this.buttons[id]) {
      throw new Error(`No button with id: ${id}`);
    }

    this.buttons[id].addHandler(handler);
  }

  addHandlerAll(handler) {
    Object.values(this.buttons).forEach((button) => {
      button.addHandler(handler);
    });
  }

  _unhighlightAll() {
    Object.values(this.buttons).forEach((button) => {
      button.unhighlight();
    });
  }
}
