let newObj = (obj) => {
  let result = new Map();
  for (key in obj) {
    let value = obj[key];
    result.set(value, key);
  }
  return result;
};
console.log(newObj({ aa: 1, bb: 22 }));
