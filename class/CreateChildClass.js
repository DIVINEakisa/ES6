class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }
  makeSound() {
    console.log(`${this.name} sound is ${this.sound} `);
  }
}
class Dog extends Animal {
  constructor(name, sound) {
    super(name, sound);
  }
  makeSound() {
    super.makeSound();
  }
}
let Animals = new Dog("simba", "booo");
Animals.makeSound();
