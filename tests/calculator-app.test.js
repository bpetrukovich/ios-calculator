import { beforeEach, afterEach, describe, expect, test, vi } from "vitest";
import { CalculatorApp } from "../src/calculator-app";
import { eventEmitter } from "../src/event-emitter";

describe("CalculatorApp (event-driven)", () => {
  let app;
  let displayCallback;

  beforeEach(() => {
    app = new CalculatorApp();
    displayCallback = vi.fn();
    eventEmitter.on("changeDisplay", displayCallback);
  });

  afterEach(() => {
    eventEmitter.off("changeDisplay", displayCallback);
  });

  test("initial screen should show '0'", () => {
    app._changeDisplay();
    expect(displayCallback).toHaveBeenCalledWith("0");
  });

  test("clicking zero when zero on screen should show '0'", () => {
    app.clickZero();
    expect(displayCallback).toHaveBeenCalledWith("0");
  });

  test("clicking non-zero when zero on screen should erase zero", () => {
    app.clickOne();
    expect(displayCallback).toHaveBeenCalledWith("1");
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
    expect(displayCallback).toHaveBeenLastCalledWith("123456789");
  });

  test("all non-zero numbers should show correctly with zero", () => {
    app.clickOne();
    app.clickZero();
    app.clickTwo();
    app.clickZero();
    expect(displayCallback).toHaveBeenLastCalledWith("1020");
  });

  test("click on sign should invert zero", () => {
    app.clickSign();
    expect(displayCallback).toHaveBeenLastCalledWith("-0");
  });

  test("click on sign should invert number", () => {
    app.clickOne();
    app.clickZero();
    app.clickTwo();
    app.clickZero();
    app.clickSign();
    expect(displayCallback).toHaveBeenLastCalledWith("-1020");
  });

  test("click on clear should reset screen", () => {
    app.clickOne();
    app.clickZero();
    app.clickTwo();
    app.clickZero();
    app.clickClear();
    expect(displayCallback).toHaveBeenLastCalledWith("0");
  });

  test("click on clear all should reset screen", () => {
    app.clickOne();
    app.clickZero();
    app.clickTwo();
    app.clickZero();
    app.clickClearAll();
    expect(displayCallback).toHaveBeenLastCalledWith("0");
  });

  test("click on clear should reset screen", () => {
    app.clickOne();
    app.clickZero();
    app.clickTwo();
    app.clickZero();
    app.clickClear();
    expect(displayCallback).toHaveBeenLastCalledWith("0");
  });

  test("click on operators initially should not redraw the screen", () => {
    app.clickAdd();
    app.clickDevide();
    app.clickMultiply();
    app.clickSubtract();
    expect(displayCallback).toHaveBeenCalledTimes(1);
  });

  test("click on operators with one operand should not redraw the screen", () => {
    app.clickOne();
    app.clickZero();
    app.clickTwo();
    app.clickZero();
    app.clickAdd();
    app.clickDevide();
    app.clickMultiply();
    app.clickSubtract();
    expect(displayCallback).toHaveBeenCalledTimes(5);
  });

  test("should sum 2 numbers correctly", () => {
    app.clickTwo();
    expect(displayCallback).toHaveBeenLastCalledWith("2");
    app.clickAdd();
    app.clickThree();
    expect(displayCallback).toHaveBeenLastCalledWith("3");
    app.clickEquals();
    expect(displayCallback).toHaveBeenLastCalledWith("5");
  });

  test("should sum 2 numbers without equal", () => {
    app.clickTwo();
    expect(displayCallback).toHaveBeenLastCalledWith("2");
    app.clickAdd();
    app.clickThree();
    expect(displayCallback).toHaveBeenLastCalledWith("3");
    app.clickAdd();
    expect(displayCallback).toHaveBeenLastCalledWith("5");
  });

  test("should sum 2 numbers without equal", () => {
    app.clickTwo();
    expect(displayCallback).toHaveBeenLastCalledWith("2");
    app.clickAdd();
    app.clickThree();
    expect(displayCallback).toHaveBeenLastCalledWith("3");
    app.clickSubtract();
    expect(displayCallback).toHaveBeenLastCalledWith("5");
  });

  test("should show 0 when second argument is 0", () => {
    app.clickTwo();
    app.clickSubtract();
    app.clickZero();
    expect(displayCallback).toHaveBeenLastCalledWith("0");
  });

  test("equals should not forget nums", () => {
    app.clickSix();
    app.clickAdd();
    app.clickSeven();
    app.clickEquals();
    app.clickSubtract();

    expect(displayCallback).toHaveBeenLastCalledWith("13");
  });

  test("sign should toggle sign", () => {
    app.clickSign();
    app.clickSign();

    expect(displayCallback).toHaveBeenLastCalledWith("0");
  });

  test("sign ios specifics", () => {
    app.clickFive();
    app.clickAdd();
    app.clickSign();

    expect(displayCallback).toHaveBeenLastCalledWith("-0");
  });

  test("equals should repeat operations", () => {
    app.clickTwo();
    app.clickAdd();
    app.clickThree();
    app.clickEquals();
    app.clickEquals();

    expect(displayCallback).toHaveBeenLastCalledWith("8");
  });
});
