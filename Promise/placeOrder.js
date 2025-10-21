// Create a function placeOrder(product)

// It returns a Promise.

// If product is not empty, resolve with a message like:
// 👉 "Order placed for <product>."

// If no product is provided, reject with:
// 👉 "No product specified."
function placeOrder(product) {
  return new Promise((resolve, reject) => {
    if (product !== undefined && product.length !== 0 && product !== "") {
      resolve(`Order placed for ${product}`);
    } else {
      reject("No product specified.");
    }
  });
}
placeOrder("shoes")
  .then((result) => {
    console.log(`Success ${result}`);
  })
  .catch((error) => {
    console.log(`Failed`);
  });
