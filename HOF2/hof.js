//using the function firstClassFuntion as an argument in another the higherOrderFunction. i.e calling
const higherOrderFunction = (anyParameter) => {
  console.log('HOF output');
};

const firstClassFuntion = (anyNumber) => {
  console.log('this is from the first class function');
};

higherOrderFunction(firstClassFuntion());
//outut is below
// this is from the first class function
// HOF output

//case2 function rreturning another function

const addNumber = (input) => {
  return (anyNumber) => {
    anyNumber * 2;
  };
};

console.log(addNumber());
