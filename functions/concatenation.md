# Concatenation

Concatenation simply means the Combination, Merging, or Joining of two or more data together. This data could be of any type or mix although they are mostly applicable to string data types

### Ways of concatenating
1. using the Plus Arithmetic Operator `(+)`: for example
```
const instagram = '@akogwuIG';
const twitter = '@Akogwemmanuel8';
const facebook = '@akogwu emmanuel';

const newString = 'My handles are ' + instagram + twitter + facebook;
```
2. Template Literals(Template Strings): It's a simple way to include expressions in your string creation which is dyanmic, easy to adjust, readable and concise.

```
const surname = 'Akgowu';
const firstName = 'Emmanuel';
const age = 12;
```
these can be concatenated using template literals as shown blow:

```
//template literal
`Hello Ebenezer, my name is ${surname} ${firstName} and I am ${age}years Old`

//output
'Hello Ebenzer, my name is Akogwu Emanuel and I am 12years Old'
```

3. Concate Method: Strings have a built-in concat() method. The concat() function takes one or more parameters, and returns the modified string. Strings in JavaScript are immutable, so concat() doesn't modify the string in place.
```
const str1 = 'Hello';
const str2 = str1.concat(' ', 'World');

//Strings are immutable, so `concat()` does not modify `str1`
console.log(str1);  //'Hello'

console.log(str2);  // 'Hello World'
```

4. join method: The `Join()` creates a new string from concatenating all elements in an array. For example:
```
['a', 'b', 'c'].join(); // 'a,b,c'
```


### my question
it we hava an array or object that are merged in to one, is right to call that concatenation too?