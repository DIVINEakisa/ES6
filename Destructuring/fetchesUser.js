function getUser() {
  return {
    id: 1,
    name: "Dede",
    details: {
      email: "akisa@example.com",
      age: 20,
    },
  };
}
getUser();
let user = getUser();
let {
  name,
  details: { email },
} = user;
let userSummary = {
  name: name,
  email: email,
  show: function () {
    return `${this.name} - ${this.email}`;
  },
};
console.log(userSummary.show());
