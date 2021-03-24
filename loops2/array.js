const personInfo = [
  'slim',
  (yearOfBirth, currentYear) => {
    const age = currentYear - yearOfBirth;
    return age;
  },
  180,
];

//to access th function in the array. index it as a normal array element
// const yourAge = personInfo[1](2000, 2021);
// console.log(yourAge);

const footBallClubs = [
  {
    name: 'chelsea',
    country: 'england',
    manager: 'tuchel',
  },
  {
    name: 'manchester',
    country: 'england',
    manager: 'ole',
  },
  {
    name: 'juve',
    country: 'italy',
    manager: 'pirlo',
  },
];
for (club of footBallClubs) {
  const objectValues = Object.values(club);
  const secondValue = objectValues[1];

  console.log(secondValue);
}

footBallClubs.forEach((club) => {
  const objectValues = Object.values(club);
  const secondValue = objectValues[1];

  console.log(secondValue);
});
