let myObject = { a: 12, b: 21 };
Object.freeze(myObject);
myObject.c = 2;
delete myObject.a;
myObject.b = 4;
console.log(myObject);
