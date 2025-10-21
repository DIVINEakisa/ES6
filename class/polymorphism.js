// Polymorphism Practice:
// Create a base class
// Shape with a method area().
// Create subclasses Circle, Rectangle, and Triangle,
// each overriding area() differently.
// Rectangle  A = L * W
// Circle A = pi * (r)square
// Triangle  A = 1/2 b * h
class Base {
  constructor(b, h, l, w, pi = 3.14, r) {
    this.b = b;
    this.h = h;
    this.l = l;
    this.w = w;
    this.pi = pi;
    this.r = r;
  }
  area(a, b) {
    console.log(a * b);
  }
}
class Rectangle extends Base {
  constructor(l, w) {
    super(undefined, undefined, l, w);
  }
  area() {
    super.area(this.l, this.w);
  }
}
class Circle extends Base {
  constructor(pi, r) {
    super(undefined, undefined, undefined, undefined, pi, r);
  }
  area() {
    super.area(this.pi, this.r);
  }
}
class Triangle extends Base {
  constructor(b, h) {
    super(b, h);
  }
  area() {
    super.area(this.b, this.h);
  }
}
const newRect = new Rectangle(5, 3);
newRect.area();

const newCirc = new Circle(2, 3);
newCirc.area();
const newTrian = new Triangle(4, 6);
newTrian.area();
