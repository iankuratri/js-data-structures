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

console.log(list.removeFrom(2));

list.print();
