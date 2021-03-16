//??????how do we incorporate units with the vlues without using it as a string.......incase we want to use it for calculation later in the program?????????????????

const house = {
  color: 'green',
  yearBuilt: '1999',
  numberOfRooms: 3,
  swimmingPool: true,
  address: '55 SkillUp Street Abraham Adesanya Estate',
  landPlotSize: 3,
  carPark: true,
  occuppied: false,
  sellingPrice: '88,000,000NGN',
  rentagePrice: '1,300,000NGN',
  store: true,
};

const laptop = {
  name: 'lenovo',
  model: 'Ideapad 130',
  screenSize: '15inches',
  color: 'silver',
  operatingSystem: 'windows10 Pro',
  includedItems: ['Headphone', 'Flash Drive', 'extra-battery', 'charger'],
  usbPorts: 4,
  weight: '1.8kg',
  warranty: '5years',
  RAM: '8gb',
  ROM: '1terabyt',
};

const movie = {
  title: 'Big bang Theory',
  rating: 4.8,
  actor: {
    name: 'Lenard',
    occupation: 'Experimental Physicist',
    IQ: 150,
    physicalAppearance: {
      height: '178cm',
      size: 'slim',
      muscular: false,
      complexion: 'Light-Skinned',
    },
    glasses: true,
    age: 30,
    girlFriend: false,
    exGirlFriends: ['Penny', 'Lezli', 'Amy', 'Stephanie'],
    nationailty: 'American',
    education: 'PhD',
  },
  yearOfProduction: 2012,
  numberOfSeasons: 12,
  genre: ['Sitcomedy', 'Science', 'Romance'],
  TotalNumberOfEpisodes: 299,
  cast: [
    'Sheldon Cooper',
    'Leonard Hofstadter',
    'Howard Wolowitz',
    'Raj Kootrappali',
    'Penny',
  ],
  budget: '$9,000,000',
  revenue: '$1 billion',
};
console.log(movie.actor.physicalAppearance.muscular);
