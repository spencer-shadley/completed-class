# Graphs

## Instructions

- Implement `addNode` in [Graph.js](./unsolved/Graph.js)

- Implement `addEdge` in [Graph.js](./unsolved/Graph.js)

## Hints

- Although a tree is a graph the implementation here is quite different due to differing constraints and needs

- There are a few ways to build a graph. This one is built by using an adjacency list which maps each node to its directly adjacent neighbors

- The key of the map should be the value of the node (example, `A`)

- The value of the map should be an array of its `Edge`s

- Google "graph adjacency list" for more help

## Resources

- [example.png](./example.png) is the representation of the graph being created at the bottom of `Graph.js`

## Bonus

- Add a `getNumNodes` method to the graph

- Add a `getNumEdges` method to the graph

- Think about how you could search for a specific node in the graph

- Research _Breadth-First-Search (BFS)_ and _Depth-First-Search (DFS)_

## Challenge

- Don't use the starter code, build a graph which supports the below operations from scratch

```js
const graph = new Graph();
const vertices = [`A`, `B`, `C`, `D`, `E`, `F`];
for (const vertex of vertices) {
  graph.addNode(vertex);
}
console.log(graph.getNumNodes());
console.log(graph.getNumEdges());

graph.addEdge(`A`, `B`, 10);
graph.addEdge(`A`, `C`, 30);
graph.addEdge(`A`, `D`, 40);
graph.addEdge(`B`, `A`, 20);
graph.addEdge(`B`, `E`, 50);
graph.addEdge(`D`, `F`, 70);
graph.addEdge(`E`, `C`, 60);
graph.addEdge(`E`, `D`, 80);
graph.addEdge(`F`, `E`, 90);

graph.printGraph();

// A -> [{"destination":"B","weight":10},{"destination":"C","weight":30},{"destination":"D","weight":40}]
// B -> [{ "destination": "A", "weight": 20 }, { "destination": "E", "weight": 50 }]
// C -> []
// D -> [{"destination":"F","weight":70}]
// E -> [{ "destination": "C", "weight": 60 }, { "destination": "D", "weight": 80 }]
// F -> [{ "destination": "E", "weight": 90 }]
```
