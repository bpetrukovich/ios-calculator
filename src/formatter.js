export class Formatter {
  static formatToCalculator(string) {
    return +this._replaceCommaWithDot(string);
  }

  static formatFromCalculator(number) {
    if (number === 0) return "0";

    const rounded = this._roundToSignificantDigits(number, 9);
    const abs = Math.abs(rounded);

    if (abs >= 1e9 || abs < 1e-8) {
      return rounded.toExponential(3).replace("+", ""); // TODO: comma here
    }

    let [intPart, decPart] = ("" + rounded).split(".");

    intPart = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, " ");

    let totalChars = intPart.replace(/ /g, "").length;
    if (decPart) {
      const allowedDecimals = Math.max(0, 9 - totalChars);
      decPart = decPart.slice(0, allowedDecimals);
    }

    const result = decPart ? `${intPart},${decPart}` : intPart;
    return this._replaceDotWithComma(result);
  }

  static _replaceCommaWithDot(number) {
    if (number.includes(",")) {
      return number.replace(",", ".");
    }
    return number;
  }

  static _replaceDotWithComma(number) {
    if (number.includes(".")) {
      return number.replace(".", ",");
    }
    return number;
  }

  static _roundToSignificantDigits(num, digits) {
    if (num === 0) return 0;
    const scale = Math.pow(10, digits - Math.ceil(Math.log10(Math.abs(num))));
    return Math.round(num * scale) / scale;
  }
}
