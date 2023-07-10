const { createMockApiResponse } = require("./mockAPI");

createMockApiResponse()
  .then((track) => {
    console.log("Promise fulfilled. Track:", track);
  })
  .catch((error) => {
    console.error("Error:", error.message);
  });
