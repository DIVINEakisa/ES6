let object = { a: 12, b: 33 };
Object.preventExtensions(object);
delete object.a;
object.c = 4;
object.b = 21;
console.log(object);
