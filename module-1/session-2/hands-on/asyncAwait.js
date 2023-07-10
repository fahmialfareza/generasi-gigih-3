const { createMockApiResponse } = require("./mockAPI");

async function fetchData() {
  try {
    const track = await createMockApiResponse();
    console.log("Async/await fulfilled. Track:", track);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

fetchData();
