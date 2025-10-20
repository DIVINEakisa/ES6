// Create a class Car with brand, model, and year.
// Add a method displayInfo() that shows all details.
// Default Parameters:
// Modify the Car class so that if year is not provided, it defaults to 2020.
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
