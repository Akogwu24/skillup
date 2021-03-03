// const emailInputed = document.getElementById("emailInput");

// const emailerr = document.getElementById("emailError");

// emailInputed.addEventListener("blur", () => {
//   if (emailInputed.value == "") {
//     emailInput.style.borderColor = "red";
//     emailerr.innerHTML = "error, input a valid email";
//   } else if (!emailInputed.value.includes("@")) {
//     emailInput.style.borderColor = "yellow";
//     emailerr.innerHTML = "error to bad, input a valid email";
//   } else {
//     emailInput.style.borderColor = "green";
//     emailerr.innerHTML = "email is valid";
//   }
// });

// const passwordInput = document.getElementById("passwordInput");

// passwordInput.addEventListener("blur", () => {
//   let pError = document.getElementById("PasswordError");

//   if (passwordInput.value == "") {
//     pError.innerHTML = "you did not enter a password";
//     passwordInput.style.borderColor = "red";
//   } else {
//     pError.innerHTML = "password entered,you ae good to go";
//     passwordInput.style.borderColor = "green";
//   }
// });

// const password2 = document.getElementById("passwordInput2");

// password2.addEventListener("blur", () => {
//   let confirmpasswordError = document.getElementById("ConfirmPasswordError");

//   if (password2.value != passwordInput.value || password2 == "") {
//     confirmpasswordError.innerHTML = "passwords does not match";
//     passwordInput2.style.borderColor = "red";
//   } else {
//     confirmpasswordError.innerHTML = "awesome passwords match";
//     passwordInput2.style.borderColor = "green";
//   }
// });

// button window event
// const btn = document.querySelector("button");

// console.log(btn);

// window.addEventListener("load", () => {
//   btn.innerHTML = "lhlvhtjjb";
//  });

// bubble sort algorithim
const arr = [4, 2, 5, 4, 3, 1]; //arra of 6 items

for (
  let j = 0;
  j < arr.length;
  j++ //picks on item at index j from the array for
)
  for (
    i = 0;
    i <= arr.length;
    i++ //picks on item at index i from the array for
  )
    if (arr[i] > arr[i + 1]) {
      let temporaryVariable = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temporaryVariable;
      console.log(`the sorted up to j= ${j}  and i= ${i} is ${arr}`);
    }
console.log(`the final sorted array is ${arr}`);
