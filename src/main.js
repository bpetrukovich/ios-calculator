import { CalculatorApp } from "./calculator-app";
import { eventEmitter } from "./event-emitter";
import "./style.css";
import { ButtonLayout } from "./ui/button-layout";
import { CalculatorButton } from "./ui/calculator-button";
import { NumberCalculatorButton } from "./ui/number-calculator-button";

eventEmitter.on("changeDisplay", (input) => {
  document.querySelector("#display-text").innerText = input;
});
// new ButtonLayout();
const app = new CalculatorApp();

const allButtons = document.querySelectorAll("button");

allButtons.forEach((button) => {
  button.addEventListener("click", () => {
    unhighlightAllButtons();
  });
});

const applyFunctionToButton = (id, handler) => {
  const button = document.querySelector(`#${id}`);
  button.addEventListener("click", handler);
};

const highlightButton = (id) => {
  const button = document.querySelector(`#${id}`);
  button.classList.add("highlight");
};

const unhighlightAllButtons = (button) => {
  allButtons.forEach((button) => {
    button.classList.remove("highlight");
  });
};

applyFunctionToButton("divide", () => highlightButton("divide"));
applyFunctionToButton("multiply", () => highlightButton("multiply"));
applyFunctionToButton("subtract", () => highlightButton("subtract"));
applyFunctionToButton("add", () => highlightButton("add"));

//

applyFunctionToButton("button-0", () => app.clickZero());
applyFunctionToButton("button-1", () => app.clickOne());
applyFunctionToButton("button-2", () => app.clickTwo());
applyFunctionToButton("button-3", () => app.clickThree());
applyFunctionToButton("button-4", () => app.clickFour());
applyFunctionToButton("button-5", () => app.clickFive());
applyFunctionToButton("button-6", () => app.clickSix());
applyFunctionToButton("button-7", () => app.clickSeven());
applyFunctionToButton("button-8", () => app.clickEight());
applyFunctionToButton("button-9", () => app.clickNine());

applyFunctionToButton("divide", () => app.clickDevide());
applyFunctionToButton("multiply", () => app.clickMultiply());
applyFunctionToButton("subtract", () => app.clickSubtract());
applyFunctionToButton("add", () => app.clickAdd());
applyFunctionToButton("equals", () => app.clickEquals());

applyFunctionToButton("clear", () => app.clickClearAll());
applyFunctionToButton("sign", () => app.clickSign());
applyFunctionToButton("percent", () => app.clickPercent());
applyFunctionToButton("comma", () => app.clickComma());
