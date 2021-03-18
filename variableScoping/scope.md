# Scoping
Scope simply means the extent to which a variable, function or an object is visible and accessible in a program during runtime.
There are two typesof scopes In javaScript. these are the Global Scope and the Local Scope.
### Global Scope
A variable or function is said to have a global scope if it is declared in the root of the script. In other words it is not ecncolsed within any block of codes i.e it is defined outside all function blocks or loop blocks in the program.
functions in the global scope can be accessed, altered and manipuated anywhere in the program.
There is only one Global Scope throughout any JavaScript program 
for example

```
    const name = 'Akogwu'
    //other codes might be written in between
    cosole.log('Hi ' + name) //Hi Akogwu
```
Variable name is visible and accessible everywhere in the program, thus it ha s a Global Scope 

### Local Scope
A Variable within a block (be it function block, loop block or conditional statemet block) is said to have a Local Scope because it is only accessible and visible within that same block it is defined.

```
// for Objets
    const youngMan = {
    name: 'emma' //block scope
    }

    console.log(emma) //ReferenceError: emma is not defined
```
In the object instsatiation snipoet above the prperty `name` is not directly visible outside the object, hence we say it is local to the Objet youngMan. 

```
// for Conditionals (if statement)

  if (true) {
    const name = 'akogwu'
    console.log('Hello' + " " + name); // output: Hello akogwu
  }
  console.log('hello + " " + name); //output: Reference Error because variables name is not accessible out the if statement block
```
```
// for functions
    let a = "hello";

    function greet() {
        let b = "World"
        console.log(a + b); //output hello world
    }

    greet();
    console.log(a + b); // error
```

## Importance of Scoping
1. They provide some level of security to your code, i.e are only used when they are really needed.
2. Scoping parts of your code help improve efficiency, track and reduce bugs.
3. It also solves the naming problem when you have variables with the same name but in different scopes, so reduce namespace collision