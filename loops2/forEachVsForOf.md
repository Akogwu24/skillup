## for...of Vs forEach
consider the code snippets below for an Array of Objects called footBallClubs.

**for...of**
```
1. for ( club of footBallClubs ) {
2.  const objectValues = Object.values(club)
3.  const secondValue = objectValues[1]
 
4.  console.log(secondValue)
5. }
6. // outputs england, england and italy 
```
The code above can be interpreted as:
* line 1- for every club(item) of the footballClubs Array get the values of the club Object 
* line2- Assign these values to a variable `obejectValues`. the constant variable "objectValues" now contains an Array of values of every club-object present in the footBallClubs Array
* line 3- The second value of the objectValues Array (index of 1 since javaScript indexing starts from 0) is then stored in another constant variable named "secondValue"
* line 4- secondValue is then logged into the console using the `console.log(secondValue)` statement
* line 6- It genenrates the output


**forEach**
``` 
1. footBallClubs.forEach((club) => {
2.  const objectValues = Object.values(club)
3.  const secondValue = objectValues[1]
 
4.  console.log(secondValue)
5. })
6. // outputs england, england and italy
```

The forEach code can be read as follows:
* line 1- for each club item in the footBallClubs Array execute the arrow function
* line2- Assign these values to a variable `obejectValues`. the constant variable "objectValues" now contains an Array of values of of the club objects present in the footBallClubs Array
* line 3- The second value of the objectValues Array (index of 1 since javaScript indexing starts from 0) is then stored in another constant variable named "secondValue"
* line 4- secondValue is then logged into the console using the `console.log(secondValue)` statement
* line 6- It genenrates the output


In conclusion there is no difference between the two blocks of codes as they both return th same results.