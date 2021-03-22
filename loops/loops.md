# LOOPS
A Loop is a control structure which is used to re-reun or repeat a sequence of code depending on wether a defined condition is true or false.

An Infinite loop is a loop without a terminating condition or breaking point.

Although, Infinite loop should be avoided in pogramming. a used practical case is in Operating Systems which constantly ckecks for inputs and outputs (infinitely).

### Disadvatages of Infinte Loops
1. It may lead to crashing of the system
2. It may not allow other parts of the program to run as the block will continue to run indefinitely.

### Types of Loops in JavaScript 
1. `For` Loop Statement
2. `do...while` loop
3. `while loop`
4. `For...in loop` statement
5. `For...of loop` statement

## For Loop Statement
The general syntax is
```
for (initialization expression; condition expression; increment expression){
    // code block to be executed
}
```
### Intialization
Initialization sets the Starting point of the counter and it is always runs before the first execution on the loop.
### Condition 
The Condition expression is always checked prior to the execution of the loop. the code block will only run if the condition evaluates to true otherwise the loop will not be executed.
### Final expression
The Increment expression is run after every iteration i.e after the code block has been executed. it is usually to increment or decrement the counter.
 ```
 for (let counter = 0; counter < 9; counter++) {
   console.log(counter);
}
//output: 1, 2, 3, 4, 5, 6, 7, 8
```
innitialization: counter initialized to 0;
condition: as long as the counter is less than 9 which is true so the block code will be executed
counter: after the first execution the counter is increased by 1(from 0 to 1)
back to the condition.
This sequence continues until the condition is false

## forEach Method
The forEach() is an higher order method the calls a function once for every element in the group.
For example consider an array `const numbers = [1, 2, 3, 4];`
```
numbers.forEach(function(eachNumber) {
    console.log(eachNumber);
}); 
//output: 1, 2, 3, 4
```
that is it runs the console.log on every item(number in this case) present in the number array.



## for...of
The for...of statement creates a loop Iterating over iterable objects like NodeLists, Strings, Arrays, Map, Set and so on, invoking a custom iteration hook with statements to be executed for the value of each distinct property.
for...in iterates over property names, for...of iterates over property values:
the for...of syntax is written as
```
const arr = [3, 5, 7];
arr.foo = 'hello'; // property of foo set to 'hello' asvalue

for (let i in arr) {
   console.log(i); // logs "0", "1", "2", "foo" (returns keys)
}

for (let i of arr) {
   console.log(i); // logs 3, 5, 7 (returns values)
}
```




## While Loop
The while loop starts by evaluating the condition. If the condition is true, the statement(s) is/are executed. If the condition is false, the statement(s) is/are not executed. The while loop ends.

Here is the general syntax for while loop:
```
while (condition){
   // code block 
}
```