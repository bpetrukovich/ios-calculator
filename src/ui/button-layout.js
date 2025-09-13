import { CalculatorButton } from "./calculator-button";

export class ButtonLayout {
  buttons = {};

  constructor(ids) {
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
