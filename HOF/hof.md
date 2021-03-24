# Higher Order Functions
A Higher-order function is a function that receives a function as an argument or returns a function as an output.

**caveat** they don't change the underlying original array

* Example of a function recieveing as an argument
```
const numbers = [1, 2, 3];
const numberDoubled = arr1.map(item => item * 2);
console.log(arr2);

The map function on `numbers` Array is a higher order function as it takes the arrow function as an argument.
```

* Example of a function returning a function

```
const greet = (nameOfPerson) => {
  return nameOfPerson.replace("Akogwu", "Emmanuel");
};
console.log(greet("Good morning Akogwu."));

//Akogwu got replaced with Emmanuel
```
* Another case of a function returning a function
```
const multiply = (x) => (y) => x * y;
const result = multiply(3)(2)
console.log(result)

```

## Uses of Higher Order Function
* Higher-Order functions allow us to write simple and clean code.
* Easy to Test and Debug

examples of Higher Order Functions are filtre(), map(), reduce(), forEach(), replace(), find(), some(), every(), reduce().

## Map method
The `map()` method creates a new array with the results of calling a provided function on every element in the calling array. What this means is map() calls a provided callback function once for each element in an array, in order, and constructs a new array from the results.

The map() syntax is as follows
```
array.map(function(currentValue, index, arr), thisValue)
```
currentValue(required) is the value of the current element.
index(Optional) is the array index of the current element.
arr	(Optional) is the array object the current element belongs to

for example
```
const numbers = [1, 4, 9];
const doubles = numbers.map((num) => {
  return num * 2;
});

// doubles is now [2, 8, 18]
// numbers is still [1, 4, 9]

```

## Reduce Method
The executes the callback function on each member of the calling array, and results in a single output value. The reduce() method takes in two input parameters:

The reducer callback function (making this method a higher-order function)
Optional initial value
```
arr.reduce(callback[, initialValue])
```

```
const sum = [0, 1, 2, 3].reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);
// sum is 6 which is the sum of all the elements in the Array
```
