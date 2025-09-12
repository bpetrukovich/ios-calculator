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

  test("clicking zero when zero on screen should show '0'", () => {
    app.clickZero();
    expect(app.getScreen()).toBe("0");

    app.clickZero();
    expect(app.getScreen()).toBe("0");

    app.clickZero();
    expect(app.getScreen()).toBe("0");
  });

  test("clicking non-zero when zero on screen should erase zero", () => {
    app.clickOne();
    expect(app.getScreen()).toBe("1");
  });

  test("all non-zero numbers should show correctly", () => {
    app.clickOne();
    app.clickTwo();
    app.clickThree();
    app.clickFour();
    app.clickFive();
    app.clickSix();
    app.clickSeven();
    app.clickEight();
    app.clickNine();
    expect(app.getScreen()).toBe("123456789");
  });

  test("all non-zero numbers should show correctly with zero", () => {
    app.clickOne();
    app.clickZero();
    app.clickTwo();
    app.clickZero();
    expect(app.getScreen()).toBe("1020");
  });

  test("click on sign should invert zero", () => {
    app.clickSign();
    expect(app.getScreen()).toBe("-0");
  });

  test("click on sign should invert number", () => {
    app.clickOne();
    app.clickZero();
    app.clickTwo();
    app.clickZero();
    app.clickSign();
    expect(app.getScreen()).toBe("-1020");
  });

  // test("should show max 9 digits (not including comma))", () => {
  //   app.clickOne();
  //   app.clickTwo();
  //   app.clickThree();
  //   app.clickFour();
  //   app.clickFive();
  //   app.clickSix();
  //   app.clickSeven();
  //   app.clickEight();
  //   app.clickNine();
  //   app.clickNine();
  //   app.clickNine();
  //   app.clickNine();
  //   expect(app.getScreen()).toBe("123456789");
  // });
});
