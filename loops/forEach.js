// for the array of objects
const footballClubs = [
  {
    name: 'Juventus',
    color: 'balck and white',
    nickname: 'Old Ladies',
  },
  {
    name: 'Chealsea',
    color: 'blue',
    nickname: 'The blues or The Pensioners',
  },
  {
    name: 'Liverpool',
    color: 'Red',
    nickname: 'The Reds',
  },
];

// to get the second prpperty of each object for each object in the football array defined above
// const secondProperty = footballClubs[2].color;
// console.log(secondProperty);

footballClubs.forEach((objectInFootballClubsArray) => {
  let secondProperty = objectInFootballClubsArray.color;
  console.log('the second property in each of the object is ', secondProperty);
});
