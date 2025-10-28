let ObjectDestr = (student) => {
  student = {
    name: "Dede",
    age: 20,
    course: "IT",
  };
  let { name, course } = student;
  return name, course;
};
console.log(ObjectDestr());
