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

const applyFunctionToButtons = (id, handler) => {
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

applyFunctionToButtons("divide", () => highlightButton("divide"));
applyFunctionToButtons("multiply", () => highlightButton("multiply"));
applyFunctionToButtons("subtract", () => highlightButton("subtract"));
applyFunctionToButtons("add", () => highlightButton("add"));

//

applyFunctionToButtons("button-0", () => app.clickZero());
applyFunctionToButtons("button-1", () => app.clickOne());
applyFunctionToButtons("button-2", () => app.clickTwo());
applyFunctionToButtons("button-3", () => app.clickThree());
applyFunctionToButtons("button-4", () => app.clickFour());
applyFunctionToButtons("button-5", () => app.clickFive());
applyFunctionToButtons("button-6", () => app.clickSix());
applyFunctionToButtons("button-7", () => app.clickSeven());
applyFunctionToButtons("button-8", () => app.clickEight());
applyFunctionToButtons("button-9", () => app.clickNine());

applyFunctionToButtons("divide", () => app.clickDevide());
applyFunctionToButtons("multiply", () => app.clickMultiply());
applyFunctionToButtons("subtract", () => app.clickSubtract());
applyFunctionToButtons("add", () => app.clickAdd());
applyFunctionToButtons("equals", () => app.clickEquals());

applyFunctionToButtons("clear", () => app.clickClearAll());
applyFunctionToButtons("sign", () => app.clickSign());
applyFunctionToButtons("percent", () => app.clickPercent());
applyFunctionToButtons(",", () => app.clickComma());
