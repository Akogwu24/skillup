const personInfo = [
  'slim',
  (yearOfBirth, currentYear) => {
    const age = currentYear - yearOfBirth;
    return age;
  },
  180,
];

//to access th function in the array. index it as a normal array element
const yourAge = personInfo[1](2000, 2021);
console.log(yourAge);
