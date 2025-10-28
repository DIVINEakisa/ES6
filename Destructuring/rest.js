let destr = ([first, second, , ...others]) => {
  return [first, second, , ...others];
};
console.log(destr([10, 20, 30, 40, 50]));
