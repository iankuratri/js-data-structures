/**

Object

An object is an unordered collection of key-value pairs.

The key must either be a string or symbol data type where as the value can be of any data type.

To retrieve a value, you can use the the corresponding key. 
This can be achieved using the dot notation or bracket notation.

An object is not an iterable. You cannot use it with a for of loop.

*/

// An empty object (“empty cabinet”) can be created using one of two syntaxes:

let user1 = new Object(); // "object constructor" syntax
let user2 = {}; // "object literal" syntax

let user = {
  // an object
  name: "John", // by key "name" store value "John"
  age: 30, // by key "age" store value 30
};

// Property values are accessible using the dot notation:

// get property values of the object:
console.log(user.name); // John
console.log(user.age); // 30
