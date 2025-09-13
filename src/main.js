import { CalculatorApp } from "./calculator-app";
import { eventEmitter } from "./event-emitter";
import "./style.css";
import { ButtonLayout } from "./ui/button-layout";
import { CalculatorButton } from "./ui/calculator-button";

eventEmitter.on("changeDisplay", (input) => {
  document.querySelector("#display-text").innerText = input;
});

const ids = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
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

const buttonLayout = new ButtonLayout(ids);
const app = new CalculatorApp();

Object.entries(buttonLayout.buttons).forEach(([id, button]) => {
  button.addHandler(() => app[`click${upperCaseFirstLetter(id)}`]());
});

function upperCaseFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
