const A = true;
const B = false;

// OR: will find the first true value
const C = false || "" || A || B || true;
// console.log(C);

// AND: will find the first false value
const D = A && "" && B && "aa";
console.log(D);

// If all value is true, it will get the last true value
const E = A && true && "aku" && 9;
console.log(E);
