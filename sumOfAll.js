let sumOfNumber = (arr) => {
  let sum = arr.reduce((a, b) => {
    return a + b;
  }, 0);
  let avg = sum / arr.length;
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  return { sum, avg, min, max };
};
console.log(sumOfNumber([1, 2, 3, 4, 5]));
