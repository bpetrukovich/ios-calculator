import { beforeEach, describe, expect, test } from "vitest";
import { CalculatorApp } from "../src/calculator-app";

describe("CalculatorApp", () => {
  let app;

  beforeEach(() => {
    app = new CalculatorApp();
  });

  test("initial screen should show '0'", () => {
    expect(app.getScreen()).toBe("0");
  });

  // test("clicking multiple digits correctly appends them to the screen", () => {
  //   app.clickZero();
  //   app.clickZero();
  //   expect(app.getScreen()).toBe("00");
  // });

  // test("clicking multiple zeros correctly shows only one", () => {
  //   app.clickZero();
  //   app.clickZero();
  //   expect(app.getScreen()).toBe("0");
  // });

  // test("number is initially empty and updates correctly after multiple digit inputs", () => {});
});
