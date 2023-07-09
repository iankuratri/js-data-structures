/**

Map

A map is an ordered collection of key-value pairs. Both keys and values can be of any data type.

To retrieve a value, you can use the the corresponding key Maps are iterables. 
They can be used with a for of loop.

Methods and properties are:

new Map() – creates the map.
map.set(key, value) – stores the value by the key.
map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
map.has(key) – returns true if the key exists, false otherwise.
map.delete(key) – removes the element (the key/value pair) by the key.
map.clear() – removes everything from the map.
map.size – returns the current element count.

Object vs Map

Objects are unordered whereas maps are ordered.

Keys in objects can only be string or symbol type whereas in maps, they can be of any type. 

An object has a prototype and may contain a few default keys which may collide with your own keys if you're not careful. 
A map on the other hand does not contain any keys by default.

Objects are not iterables where as maps are iterables.

The number of items in an object must be determined manually where as it is readily available with the size property in a map.

Apart from storing data, you can attach functionality to an object whereas maps are restricted to just storing data.

*/

let map = new Map([
  ["a", 1],
  ["b", 2],
]);

map.set("1", "str1"); // a string key
map.set(1, "num1"); // a numeric key
map.set(true, "bool1"); // a boolean key

// remember the regular Object? it would convert keys to string
// Map keeps the type, so these two are different:
console.log(map.get(1)); // 'num1'
console.log(map.get("1")); // 'str1'

console.log(map);

console.log(map.size); // 3

// iterate over [key, value] entries
for (let [key, value] of map) {
  console.log(key, value);
}
