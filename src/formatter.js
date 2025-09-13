export class Formatter {
  static formatToCalculator(string) {
    return +this._replaceCommaWithDot(string);
  }

  static formatFromCalculator(number) {
    return this._replaceDotWithComma("" + number);
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
}
