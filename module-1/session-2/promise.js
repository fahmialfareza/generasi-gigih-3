/* function to make setTimeout to promise */
// arrow function
const wait = (time) => new Promise((resolve) => setTimeout(resolve, time));

// function
// function waitFunction(time) {
//   return new Promise((resolve) => setTimeout(resolve, time));
// }

/* callback function -> async */
// setTimeout(() => {
//   console.log("Wait for 1 seconds");
// }, [1000]);

// console.log("Is it executed after 1 seconds?");

/* Using promise */
// console.log("Before 1 second!");
// wait(2000).then(() => {
//   console.log("After two seconds!");
//   console.log("After 3 seconds!");
//   console.log("After 4 seconds!");
// });

/* Using async-await */
const asyncAwait = async () => {
  console.log("Before 1 second!");
  await wait(2000);
  console.log("After two seconds!");
  console.log("After 3 seconds!");
  console.log("After 4 seconds!");
};
asyncAwait();
