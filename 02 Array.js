/**
 
Array

An array is a data structure that can hold a collection of values.

Arrays can contain a mix of different data types. 
You can store strings, booleans, numbers or even objects all in the same array.

Arrays are resizable. You don't have to declare the size of an array before creating it.

JavaScript arrays are zero-indexed and the insertion order is maintained.

Arrays are iterables. They can be used with a for of loop.

*/

// Declaration
// There are two syntaxes for creating an empty array:

let arr1 = new Array();
let arr2 = [];

// Array elements are numbered, starting with zero.
// We can get an element by its number in square brackets:

let fruits = ["Apple", "Orange", "Plum"];

console.log(fruits[0]); // Apple
console.log(fruits[1]); // Orange
console.log(fruits[2]); // Plum
