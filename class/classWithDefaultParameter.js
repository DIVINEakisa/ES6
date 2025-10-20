class Car {
  constructor(brand, model, year = 2020) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }
  displayInfo() {
    console.log(
      `this My Car Brand ${this.brand} and Model  is ${this.model} in this year ${this.year}`
    );
  }
}
const myCar = new Car("Toyota", "Corolla");
myCar.displayInfo();
