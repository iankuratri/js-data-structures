/**

Binary Tree:

A binary tree is a tree data structure in which each node has at most two children.

The are referred to as left child and right child.


Binary Search Tree:

The value of each left node must be smaller than the parent node.

The value of each right node must be greater than the parent node.

Each node has at most two children.


Operations:

Insertion - To add a node to the tree
Search - To find a node given its value
DFS & BFS - To visit all nodes in the tree
Deletion - To remove a node given its value


Usage:

- Searching
- Sorting
- To implement abstract data types such as lookup tables and priority queues


Tree Traversal:

Visiting every node in the tree.

A hierarchical data structure like a tree can be traversed in different ways:

- Depth First Search (DFS)
- Breadth First Search (BFS)


Depth First Search (DFS):

The DFS algorithm starts at the root node and explores as far as possible along each branch before backtracking.

Visit the root node, visit all the nodes in the left subtree and visit all the nodes in the right subtree.

Depending on the order in which we do this, there can be three types of DFS traversals:

1. Preorder
2. Inorder
3. Postorder


Preorder Traversal:

1. Read the data of the node
2. Visit the left subtree
3. Visit the right subtree

Inorder Traversal:

1. Visit the left subtree
2. Read the data of the node
3. Visit the right subtree

Postorder Traversal:

1. Visit the left subtree
2. Visit the right subtree
3. Read the data of the node

*/

// Tree Node
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Tree Class
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  isEmpty() {
    return this.root === null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(root, newNode) {
    if (newNode.value < root.value) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    } else {
      if (root.right === null) {
        root.right = newNode;
      } else {
        this.insertNode(root.right, newNode);
      }
    }
  }

  search(root, value) {
    if (!root) {
      return false;
    }
    if (root.value === value) {
      return true;
    } else if (value < root.value) {
      return this.search(root.left, value);
    } else {
      return this.search(root.right, value);
    }
  }

  preOrder(root) {
    if (root) {
      console.log(root.value);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  }

  inOrder(root) {
    if (root) {
      this.preOrder(root.left);
      console.log(root.value);
      this.preOrder(root.right);
    }
  }

  postOrder(root) {
    if (root) {
      this.postOrder(root.left);
      this.postOrder(root.right);
      console.log(root.value);
    }
  }
}

const bst = new BinarySearchTree();

console.log("Is tree empty?", bst.isEmpty());

bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);

console.log("Is 10 present?", bst.search(bst.root, 10));
console.log("Is 5 present?", bst.search(bst.root, 5));
console.log("Is 15 present?", bst.search(bst.root, 15));
console.log("Is 20 present?", bst.search(bst.root, 20));

bst.postOrder(bst.root);
