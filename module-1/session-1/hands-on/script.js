function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function isStringEmptyOrWhitespace(str) {
  const regex = /^\s*$/;
  return regex.test(str);
}

// Cara 1
const form = document.getElementById("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (isStringEmptyOrWhitespace(email) || isStringEmptyOrWhitespace(password)) {
    alert("Email and password cannot be empty!");
    return;
  }

  if (!isValidEmail(email)) {
    alert("Email is not valid!");
    return;
  }

  if (password.length < 6) {
    alert("Password cannot be less than 6 characters!");
    return;
  }

  alert("Validation complete!");
});

// Cara 2
// const submit = document.getElementById("submit");
// submit.addEventListener("click", (event) => {
//   event.preventDefault();

//   const email = document.getElementById("email").value;
//   const password = document.getElementById("password").value;

//   if (isStringEmptyOrWhitespace(email) || isStringEmptyOrWhitespace(password)) {
//     alert("Email and password cannot be empty!");
//     return;
//   }

//   if (!isValidEmail(email)) {
//     alert("Email is not valid!");
//     return;
//   }

//   if (password.length < 6) {
//     alert("Password cannot be less than 6 characters!");
//     return;
//   }

//   alert("Validation complete!");
// });
