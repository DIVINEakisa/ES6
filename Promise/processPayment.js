function processPayment(orderMessage) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = Math.random() > 0.03;
      if (success) {
        resolve(`Payment processed successfully for: ${orderMessage}`);
      } else {
        reject(`Payment processed unsuccessfully for: ${orderMessage}`);
      }
    }, 2000);
  });
}
processPayment("hell")
  .then((result) => {
    console.log("Payment Success" + result);
  })
  .catch((error) => {
    console.log("There's Something Wrong" + error);
  });
