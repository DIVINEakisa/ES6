function* getEmployee() {
  console.log("the function has started");
  const names = [
    "Amanda",
    "Diego",
    "Farrin",
    "James",
    "Kagure",
    "Kavita",
    "Orit",
    "Richard",
  ];
  for (const name of names) {
    yield name;
  }
  console.log("the function has ended");
}
const generatorIteration = getEmployee();
let result = generatorIteration.next();
result.value; // "the function has started"
genratorIteration.next(); // "Amanda"
genratorIteration.next();
