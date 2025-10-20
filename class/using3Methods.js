class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    console.log(`Hi,I'm ${this.name} I have ${this.age} years old`);
  }
}
class employee extends Person {
  constructor(name, age, salary) {
    super(name, age);
    this.salary = salary;
    console.log(
      `Hi,I'm ${this.name} I have ${this.age} years old I paid ${this.salary} per day`
    );
  }
}
let person1 = new employee("AKISA", 25, 1230);
