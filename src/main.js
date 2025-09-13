import { CalculatorApp } from "./calculator-app";
import { eventEmitter } from "./event-emitter";
import "./style.css";
import { ButtonLayout } from "./ui/button-layout";
import { CalculatorButton } from "./ui/calculator-button";
import { NumberCalculatorButton } from "./ui/number-calculator-button";

eventEmitter.on("changeDisplay", (input) => {
  document.querySelector("#display-text").innerText = input;
});
const buttonLayout = new ButtonLayout();
const app = new CalculatorApp();

// applyFunctionToButton("zero", () => app.clickZero());
// applyFunctionToButton("one", () => app.clickOne());
// applyFunctionToButton("two", () => app.clickTwo());
// applyFunctionToButton("three", () => app.clickThree());
// applyFunctionToButton("four", () => app.clickFour());
// applyFunctionToButton("five", () => app.clickFive());
// applyFunctionToButton("six", () => app.clickSix());
// applyFunctionToButton("seven", () => app.clickSeven());
// applyFunctionToButton("eight", () => app.clickEight());
// applyFunctionToButton("nine", () => app.clickNine());
//
// applyFunctionToButton("divide", () => app.clickDevide());
// applyFunctionToButton("multiply", () => app.clickMultiply());
// applyFunctionToButton("subtract", () => app.clickSubtract());
// applyFunctionToButton("add", () => app.clickAdd());
// applyFunctionToButton("equals", () => app.clickEquals());
//
// applyFunctionToButton("clear", () => app.clickClearAll());
// applyFunctionToButton("sign", () => app.clickSign());
// applyFunctionToButton("percent", () => app.clickPercent());
// applyFunctionToButton("comma", () => app.clickComma());
