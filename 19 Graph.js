/**

Graph

A graph is a non-linear data structure that consists of a finite 
number of vertices (also called nodes) connected by edges.

Trees are a specific type of graph data structure.


Types:
- Directed
- Undirected

Directed Graph:
A graph in which the edges have a direction.
Edges are usually represented by arrows pointing in the direction the graph can be traversed.

Undirected Graph:
A graph in which the edges are bidirectional.
The graph can be traversed in either direction.
The absence of an arrow tells us that the graph is undirected.


Usage:
- Google maps
- Social media sites


Graph Representation:
- Adjacency matrix
- Adjacency list


Adjacency Matrix:
An adjacency matrix is a 2D array of size V × V where V is the number of vertices in the graph.
Each row and column represent a vertex.
If the value of any element say, matrix[i][j] is 1, it represents that there is an edge connecting vertex i and vertex j

Adjacency List:
Vertices are stored in a map like data structure, and every vertex stores a list of its adjacent vertices


Adjacency Matrix vs Adjacency List:
With an adjacency list, we only need to store the values for the edges that exist.

With adjacency matrix, you store values irrespective of whether an edge exists or not. 
Storage wise, an adjacency list is way more efficient.

With adjacency list, inserting and finding adjacent nodes is constant time complexity 
whereas with adjacency matrix, it is linear time complexity.

An adjacency list allows you to store additional values with an edge such as weight of the edge. 
With adjacency matrix, such information would have to be stored externally.

*/

// Adjacency Matrix
const matrix = [
  [0, 1, 0],
  [1, 0, 1],
  [0, 1, 0],
];

console.log("A is connected to A?", matrix[0][0]);
console.log("A is connected to B?", matrix[0][1]);
console.log("A is connected to C?", matrix[0][2]);

// Adjacency List
const list = {
  A: ["B"],
  B: ["A", "C"],
  C: ["B"],
};

console.log("A is connected to?", list["A"]);
console.log("B is connected to?", list["B"]);
console.log("C is connected to?", list["C"]);

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = new Set();
    }
  }

  addEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1]) {
      this.addVertex(vertex1);
    }
    if (!this.adjacencyList[vertex2]) {
      this.addVertex(vertex2);
    }
    this.adjacencyList[vertex1].add(vertex2);
    this.adjacencyList[vertex2].add(vertex1);
  }
}

const graph = new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");

graph.addEdge("A", "B");
graph.addEdge("B", "C");
