/** 

Linked List:

A linked list is a linear data structure that includes a series of connected nodes.

Each node consists of a data value and a pointer that points to the next node.

The list elements can be easily inserted or removed without reallocation or reorganization of the entire structure.

Random access of elements is not feasible and accessing an element has linear time complexity.

The linked list data structure supports three main operations:

- Insertion: To add an element at the beginning, end or at a given index in the list 
- Deletion: To remove an item given its index or value
- Search: To find an element given its value

Usage:

All applications of both stacks and queues are applications of linked lists
Image viewer

*/

// Linked List - Node
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  // O(1) - Constant time complexity
  prepend(value) {
    const node = new Node(value);

    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }

    this.size++;
  }

  // O(n) - Linear time complexity
  append(value) {
    const node = new Node(value);

    if (this.isEmpty()) {
      this.head = node;
    } else {
      let previous = this.head;

      while (previous.next) {
        previous = previous.next;
      }

      previous.next = node;
    }

    this.size++;
  }

  insert(value, index) {
    if (index < 0 || index > this.size) {
      console.log("Invalid index.");
      return;
    }

    if (index === 0) {
      this.prepend(value);
    } else {
      const node = new Node(value);

      let previous = this.head;

      for (let i = 0; i < index - 1; i++) {
        previous = previous.next;
      }

      node.next = previous.next;
      previous.next = node;

      this.size++;
    }
  }

  // O(n) - Linear time complexity
  removeFrom(index) {
    if (index < 0 || index >= this.size) {
      console.log("Invalid index.");
      return null;
    }

    let removedNode;

    if (index === 0) {
      removedNode = this.head;
      this.head = this.head.next;
    } else {
      let previous = this.head;

      for (let i = 0; i < index - 1; i++) {
        previous = previous.next;
      }

      removedNode = previous.next;
      previous.next = removedNode.next;
    }

    this.size--;

    return removedNode.value;
  }

  // O(n) - Linear time complexity
  removeValue(value) {
    if (this.isEmpty()) {
      console.log("List is empty.");
      return null;
    }

    // removing node from beginning of list
    if (this.head.value === value) {
      this.head = this.head.next;

      this.size--;

      return value;
    } else {
      let previous = this.head;

      while (previous.next && previous.next.value !== value) {
        previous = previous.next;
      }

      if (previous.next) {
        const removedNode = previous.next;
        previous.next = removedNode.next;

        this.size--;

        return value;
      }

      console.log("Node with given value was not found.");
      return null;
    }
  }

  // O(n) - Linear time complexity
  search(value) {
    if (this.isEmpty()) {
      console.log("List is empty.");
      return -1;
    } else {
      let index = 0;
      let current = this.head;

      while (current) {
        if (current.value === value) {
          return index;
        }

        current = current.next;
        index++;
      }

      return -1;
    }
  }

  print() {
    if (this.isEmpty()) {
      console.log("List is empty.");
    } else {
      let current = this.head;
      let listValue = "";

      while (current) {
        listValue += current.value + " ";
        current = current.next;
      }

      console.log(listValue);
    }
  }

  reverse() {
    let previous = null;
    let current = this.head;

    while (current) {
      let next = current.next;
      current.next = previous;
      previous = current;
      current = next;
    }

    this.head = previous;
  }
}

const list = new LinkedList();

console.log("Is list empty?", list.isEmpty());
console.log("List size", list.getSize());

list.prepend(10);
list.prepend(20);
list.prepend(30);

list.print();

list.append(40);

list.print();

list.insert(25, 2);

list.print();

console.log("Removed from list:", list.removeFrom(2));

list.print();

console.log("Removed from list:", list.removeValue(40));

list.print();

console.log("Removed from list:", list.removeValue(30));

list.print();

console.log("Finding 10:", list.search(10));

console.log("Finding 60:", list.search(60));

list.prepend(30);

list.print();

list.reverse();

list.print();
