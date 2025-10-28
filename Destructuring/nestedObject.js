let nested = (profile) => {
  profile = {
    user: {
      id: 1,
      info: {
        email: "akisadivine11@gmail.com",
      },
    },
  };
  let {
    user: {
      info: { email },
    },
  } = profile;
  return `Hi This is my email ${email}`;
};
console.log(nested());
