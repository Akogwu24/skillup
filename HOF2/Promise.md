# PROMISE
A promise is an object that may produce a single value-state which can be either be Pending(Initial State i.e before promise is completed or fail), Resolved(completed/fufiled Promise) or Rejected(failed Promise).
A Promise is an object representing the eventual completion or failure of an asynchronous operation.

A promise that is either resolved or rejected is called “settled”, as opposed to an initially “pending” promise.
The use of the word “promise” was coined by Barbara Liskov and Liuba Shrira in 1980's.

## Crucial Rules of Promise
* A pending promise may transition into a fulfilled or rejected state.
* Once a promise is settled, it must have a value (which may be undefined). That value must not change.
* A fulfilled or rejected promise is settled, and must not transition into any other state.



The general concept of  promise can be written as:

```
const akogwuPromise = new Promise((resolve, reject) => { // creates a new promise called akogwuPromise with the Promise Object constructor.

    let condition;  
    
    if(condition is met) {    
        resolve('Promise is resolved successfully.');  
        //pPromise fufilled
    } else {    
        reject('Promise is rejected');
        //Promise failed  
    }
});

```

for example:
```
const akogwuPromise1 = new Promise((resolve, reject) => {
  let inclass;
  if(inclass==true) {
    return resolve('akogwu is in class')
  }else {
   return reject('akogw failed his promise to be rin class')
  }
})
```
example of Promise Application for akogwu attending class on monday:
```
const akogwuPromise = () => {
  return new Promise((resolve, reject) => {
    resolve('I shall be in class today')
    reject('akogwu is not in class that is an error')  
  })
} 

akogwuPromise().then((onMonday) => {
  console.log(onMonday)
}).catch((onMonday) => {
  console.log(onMonday)
})

//output: "I shall be in class today". (resolved)
```