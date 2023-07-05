try {
  let num = 5;
  console.log("I am before error!");
  num.toUpperCase();

  console.log("I am after error!");
} catch (error) {
  console.log("An occured error: ", error.message);
  console.log("I am got error!");
  // throw new Error("There was an error processing your request.");
} finally {
  // Finally almost never used
  console.log("Finally Done!");
}
