class Calculator {
  add(a, b) {
    if (typeof a === "number" && typeof b === "number") {
      return a + b;
    }
  }
  substract(a, b) {
    if (typeof a === "number" && typeof b === "number") {
      return a - b;
    }
  }
  multiply(a, b) {
    if (typeof a === "number" && typeof b === "number") {
      return a * b;
    }
  }
  divide(a, b) {
    if (typeof a === "number" && typeof b === "number" && a !==0 && b !==0) {
      return a / b;
    }
  }
}

module.exports = Calculator;
