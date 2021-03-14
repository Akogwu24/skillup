# Difference between function Arguments and Parameters
Arguments are the values passed into a function when called. They are the actual values upon which the function will run (evavluate) to return a result or output whenever it is called(applied) in the program.

Mean while parameters are simply placeholders in the function passed directly into the function at the time of the function declaration. 
Parameters act like variables, they are labels/containers in the computer memory that holds data, and the case of functions they hold the arguments.

lets take a look at the example below:

``` 
function AddTwoNumbers(a, b){   // a and b are parameters
    const sum = a + b;
    return sum;
}
```


but whenever the function AddTwoNumbers is called we need to supply the actual values to be added. these are the argumnets.

```
AddTwoNumbers(5 + 3)    //5 and 3 are the arguments

The will return sum = 8
```
### Types of Parameters
1. Input Parameters: they pass values into functions. Depending on programming language, input parameters can be passed several ways (e.g., call-by-value, call-by-address, call-by-reference).
2. Output or Return Parameters:  return multiple values from a function