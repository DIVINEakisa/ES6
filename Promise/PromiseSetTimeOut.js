let delay = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data Received");
    }, 2000);
  });
};
delay().then((res) => {
  console.log(res);
});
