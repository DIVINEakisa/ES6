// write a function that takes an object as input and returns a
// new object with all the key - value pairs
// reversed(keys become values and values become keys)
// const originalObj = {aa: "1", bf: "3", cq: "5"};
// const reversedObj = reverseObject(originalObj);
// // console.log(reversedObj);
// output: {"1": 'aa', "3": 'bf', "5": 'cq'} // Expected out
let newObj = (obj) => {
  let result = new Map();
  for (key in obj) {
    let value = obj[key];
    result.set(value, key);
  }
  return result;
};
console.log(newObj({ aa: 1, bb: 22 }));
