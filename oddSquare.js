let oddSquare = (num) => {
  let square = num.filter((a) => a % 2 !== 0).map((a) => a ** 2);
  return square;
};
console.log(oddSquare([1, 2, 3, 4, 5, 6]));
console.log(oddSquare([10, 15, 20, 25, 30]));
