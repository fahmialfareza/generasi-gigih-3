const students = require("./students"); // the normal nodejs
// import students from "./students.js" -- es6

// It will get the first index student
console.log(students[0]);
// I want to introduce youngest friend that is Rizky
console.log(`I have a friend that very young, the name is ${students[1].name}`);

console.log(`Mas ${students[1].name} is from ${students[1]?.address?.city}`);

// map
students.map((student) => {
  const { name, age, address } = student;

  const descriptionOne = `The name of student is ${name}, ${age} years old`;
  const descriptionTwo = `and the address is ${address?.city}`;
  console.log(`${descriptionOne} ${address?.city ? descriptionTwo : ""}!`);
});
