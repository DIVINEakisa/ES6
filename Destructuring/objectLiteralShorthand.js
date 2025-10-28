// const brand = "Toyota";
// const model = "Corolla";
// Create an object named car using
// object literal shorthand that includes
//  both variables and a method
// details() which prints "Toyota Corolla".

const brand = "Toyota";
const model = "Corolla";
let car = {
  brand: brand,
  model: model,
  detail: function () {
    return `${this.brand} ${this.model}`;
  },
};
console.log(car.detail());
