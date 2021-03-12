const x = 10;
const y = 50;

//single comparison
if (x == 10) {
  console.log("if!");
} else {
  console.log("else!");
}

//logical operators
//OR
if (x == 10 || y < 20) {
  console.log("i will still reun because of of the logic is true.\n X == 10");
}

//AND
if (x == 10 && y < 20) {
  console.log("if!");
} else if (x > 50) {
  console.log("else if!");
} else {
  console.log("else");
}

const gender = "Male";
const age = 25;

if (gender == "Male") {
  if (age >= 18) {
    console.log("You are a " + gender + " and above the age limit!");
  } else {
    console.log("sorry dude");
  }
} else if (gender == "female") {
  if (age >= 18) {
    console.log("You re a " + gender + " and above the age limit");
  } else {
    console.log("sorry lady!");
  }
} else {
  console.log("can't figuer out yor gender");
}

// solving the same problem Using Logical Operators

if ((gender == "Male" || gender == "male") && age >= 18) {
  console.log("ou are a " + gender + " and above the age limit");
} else if ((gender == "Male" || gender == "male") && age < 18) {
  console.log("sorry dude!");
} else if ((gender == "Female" || gender == "female") && age >= 18) {
  console.log("You are a " + gender + " and above the age limit");
} else if ((gender == "Female" || gender == "female") && age < 18) {
  console.log("Sorry Lady!");
} else {
  console.log(
    "Cant figure out your Age or you are either an amaphrodite r an alien!!!!!!!!!!"
  );
}

// //using tenary operator

(gender == "Male" || gender == "male") && age > 18
  ? console.log("you are a " + gender + " and above the age limit")
  : (gender == "Male" || gender == "male") && age < 18
  ? console.log("Sorry dude")
  : (gender == "Female" || gender == "female") && age > 18
  ? console.log("You are a " + gender + "and above the age limit")
  : (gender == "Female" || gender == "female") && age < 18
  ? console.log("Sorry Lady!")
  : console.log(
      "Cant figure out your Age or you are either an amaphrodite r an alien!!!!!!!!!!"
    );

// const age = 132;
// age < 10
//   ? console.log("child")
//   : age < 18
//   ? console.log("adolescent")
//   : age < 45
//   ? console.log("youth")
//   : age > 45
//   ? console.log("senior citizen")
//   : console.log("i don't know about you");
