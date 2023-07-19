/**
 * Linked List with Tail
 */

// Linked List - Node
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Linked List with Tail
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
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
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }

    this.size++;
  }

  // O(1) - Constant time complexity
  append(value) {
    const node = new Node(value);

    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }

    this.size++;
  }

  // O(1) - Constant time complexity
  removeFromFront() {
    if (this.isEmpty()) {
      console.log("List is empty.");
      return null;
    }

    const value = this.head.value;
    this.head = this.head.next;

    this.size--;

    return value;
  }

  // O(n) - Linear time complexity
  removeFromEnd() {
    if (this.isEmpty()) {
      console.log("List is empty.");
      return null;
    }

    const value = this.tail.value;

    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let previous = this.head;
      while (previous.next !== this.tail) {
        previous = previous.next;
      }

      previous.next = null;
      this.tail = previous;
    }

    this.size--;
    return value;
  }

  // O(n) - Linear time complexity
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

module.exports = LinkedList;

// const list = new LinkedList();

// console.log("Is list empty?", list.isEmpty());
// console.log("List size", list.getSize());

// list.print();

// list.append(1);
// list.append(2);
// list.append(3);
// list.prepend(0);

// list.print();

// console.log("List size", list.getSize());

// list.removeFromFront();

// list.print();

// list.removeFromEnd();

// list.print();
