// Create a class Calculator
// with methods add(), subtract(),
//     multiply(), and divide()
// that return this to allow chaining.
class Calculator {
  constructor(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
  }
  add() {
    return this.num1 + this.num2;
  }
  substract() {
    return this.num1 - this.num2;
  }
  multiply() {
    return this.num1 * this.num2;
  }
  divide() {
    return this.num1 / this.num2;
  }
}
let firs = new Calculator(21, 4);
console.log(firs.add());
console.log(firs.substract());
console.log(firs.multiply());
console.log(firs.divide());
