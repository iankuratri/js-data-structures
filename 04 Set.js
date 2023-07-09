/**

Set

A set is a data structure that can hold a collection of values. The values however must be unique.

Set can contain a mix of different data types. 
You can store strings, booleans, numbers or even objects all in the same set.

Sets are dynamically sized. You don't have to declare the size of a set before creating it.

Sets do not maintain an insertion order.

Sets are iterables. They can be used with a for of loop.


Set vs Array

Arrays can contain duplicate values whereas Sets cannot.

Insertion order is maintained in arrays but it is not the case with sets.

Searching and deleting an element in the set is faster compared to arrays.

*/

const set = new Set([1, 2, 3]);

set.add(4);

console.log(set); // Set(3) { 1, 2, 3 }

for (let item of set) {
  console.log(item);
}

console.log(set.has(4)); // true

console.log(set.size); // 4

set.clear(); // to clear set
