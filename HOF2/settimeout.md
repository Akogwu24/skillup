# setTimeout
The setTimeout() function is a method of the window object which executes a function once after a predefined time in milliseconds has elapsed. in other words the setTimeout allows running of code after some time.

The general syntax of the setTimeout is:
```
setTimeout (function, milliseconds, argumentOfFunction1, argumentOfFunction2, ...) 
//function (Required)- Specifies the function that will be executed.
//milliseconds (required)- Specifies the time the function will be executed. defauls to 0milliseconds if not specified.
//param_one, param_two, ... (Not required) Parameters passed to the function.

```
example:

```
setTimeout(()=> {
    console.log('Good morning')
}, 3000)
//this prints "Good morning" after 3000milliseconds(3seonds)
```

example2:
```
setTimeout((name, prayer)=>{
  console.log('happy Easter',name, prayer)
}, 2000, 'Akogwu', 'may God continue to bless you')
 //happy Easter Akogwu may god continue to bless you
```
the funtion above takes two parameters (name and prayer) and sets aruguements("Akogwu" and "may God continue to bless you") for them in the setTimeout function