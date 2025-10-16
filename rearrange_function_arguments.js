// Write a JavaScript program
//  to create a function that
// invokes the provided function
// with its arguments arranged according
// to the specified indexes.
const RearrangeArguments =
  (fn, arraOfIndex) =>
  (...args) => {
    let result = arraOfIndex.map((index) => args[index]);
    return fn(...result);
  };
const greet = (...arg) => arg;
const greetRearranged = RearrangeArguments(greet, [2, 0, 1]);

console.log(greetRearranged(1, 2, 0));
console.log(greetRearranged("is", "Dede", "awesome"));
