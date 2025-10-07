// function powerOfTwo(n) {
//   if (n <= 0) return 0;
//   let num = Math.log(n) / Math.log(2);
//   return Number.isInteger(num);
// }
// console.log(powerOfTwo(12));
// console.log(powerOfTwo(13));
// console.log(powerOfTwo(6));

function powerOfTwo(v) {
  if (v <= 0) return 0;
  let num = Math.log(v) / Math.log(2);
  return Number.isInteger(v);
}
console.log(powerOfTwo(12));
console.log(powerOfTwo(19));
