export class CalculatorButton {
  constructor(id) {
    this.element = document.querySelector(`#${id}`);
  }

  isHighlightable() {
    return this.element.classList.contains("highlightable");
  }

  addHandler(handler) {
    this.element.addEventListener("click", handler);
  }

  highlight() {
    this.element.classList.add("highlight");
  }

  unhighlight() {
    this.element.classList.remove("highlight");
  }
}
