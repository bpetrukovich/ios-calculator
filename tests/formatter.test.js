import { describe, expect, test } from "vitest";
import { Formatter } from "../src/formatter";

describe("Formatter", () => {
  test("replace comma with dot", () => {
    const result = Formatter._replaceCommaWithDot("1,2");
    expect(result).toBe("1.2");
  });

  test("replace dot with comma", () => {
    const result = Formatter._replaceDotWithComma("1.2");
    expect(result).toBe("1,2");
  });

  test("should format to calculator", () => {
    const result = Formatter.formatToCalculator("1,2");
    expect(result).toBe(1.2);
  });

  test("should format from calculator", () => {
    const result = Formatter.formatFromCalculator(1.2);
    expect(result).toBe("1,2");
  });
});
