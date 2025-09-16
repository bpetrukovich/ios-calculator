import { CalculatorButton } from "./calculator-button";

export class ButtonLayout {
  _buttons = {};

  constructor(ids) {
    ids.forEach((id) => {
      this._buttons[id] = new CalculatorButton(id);
    });

    Object.values(this._buttons).forEach((button) => {
      button.addHandler(() => this._unhighlightAll());
    });

    Object.values(this._buttons)
      .filter((button) => button.isHighlightable())
      .forEach((button) => {
        button.addHandler(() => button.highlight());
      });
  }

  addHandler(id, handler) {
    if (!this._buttons[id]) {
      throw new Error(`No button with id: ${id}`);
    }

    this._buttons[id].addHandler(handler);
  }

  addHandlerAll(handler) {
    Object.entries(this._buttons).forEach(([id, button]) => {
      button.addHandler(handler.bind(null, id));
    });
  }

  _unhighlightAll() {
    Object.values(this._buttons).forEach((button) => {
      button.unhighlight();
    });
  }
}
