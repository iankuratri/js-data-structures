/**
 
Hash Table

A hash table, also known as hash map, is a data structure that is used to store key-value pairs.

Given a key, you can associate a value with that key for very fast lookup.

JavaScript's Object is a special implementation of the hash table data structure.

However, Object class adds its own keys. 
Keys that you input may conflict and overwrite the inherited default properties.

Maps which were introduced in 2015 allow you to store key-value pairs.

Writing your own hash table implementation is a very popular JavaScript interview question.

Hash tables store key value pairs:
1. 'in' => 'India'
2. 'au' => 'Australia'
3. 'fr' => 'France
4. 'It' => 'Italy'

We store the key value pairs in a fix sized array.

Arrays have a numeric index.

How do we go from using a string as an index to number as an index?

A hashing function accepts the string key, converts it into a hash code using a defined logic 
and then maps it into a numeric index that is within the bounds of the array.

Using the index, store the value.

The same hashing function is reused to retrieve the value given a key:

- Set to store a key-value pair
- Get to retrieve a value given its key 
- Remove to delete a key value pair

Usage:

Hash tables are typically implemented where constant time lookup and insertion are required:
- Database indexing
- Caches

*/

class HashTable {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }

  hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    return total % this.size;
  }

  set(key, value) {
    const index = this.hash(key);
    this.table[index] = value;
  }

  get(key) {
    const index = this.hash(key);
    return this.table[index];
  }

  remove(key) {
    const index = this.hash(key);
    this.table[index] = undefined;
  }

  display() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        console.log(i, this.table[i]);
      }
    }
  }
}

const table = new HashTable(50);

table.set("name", "Bruce");
table.set("age", 25);

table.display();

console.log(table.get("name"));

table.remove("name");

table.display();
