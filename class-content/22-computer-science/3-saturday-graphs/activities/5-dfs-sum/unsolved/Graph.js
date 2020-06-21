/* eslint-disable no-magic-numbers */
'use strict';

/**
 * Represents a directed weighted edge in a graph
 * The source is kept track of automatically in Graph
 * so it is not needed here
 */
class Edge {
    constructor(destination, weight) {
        this.destination = destination;
        this.weight = weight;
    }
}

/**
 * A graph data structure, internally using an adjacency list
 */
class Graph {
    constructor(value) {
        this.value = value;
        this.adjacencyList = new Map();
    }

    /**
     * Adds a new node to the graph
     * @param {Number} node the node/vertex being added
     */
    addNode(node) {
        this.adjacencyList.set(node, []);
        ++this.numNodes;
    }

    /**
     * Adds a directed edge from @param source to
     * @param destination of weight @param weight
     */
    addEdge(source, destination, weight) {
        const edge = new Edge(destination, weight);
        this.adjacencyList.get(source).push(edge);

        ++this.numEdges;

        // non-directed graphs would also have the other side:
        // this.adjacencyList.get(destination).push(edge);
    }

    dfs(start) {
        const stack = [start];
        const visited = new Set();
        while (stack.length !== 0) {
            const currentVertex = stack.pop();
            if (!visited.has(currentVertex)) {
                console.log(currentVertex);
                visited.add(currentVertex);
                const edges = this.adjacencyList.get(currentVertex);
                for (const { destination } of edges) {
                    stack.push(destination);
                }
            }
        }
    }

    /**
     * Prints the nodes and edges in the graph
     */
    printGraph() {
        for (const [node, edges] of this.adjacencyList.entries()) {
            console.log(`${node} -> ${JSON.stringify(edges)}`);
        }
    }
}

const graph = new Graph();
const vertices = [`A`, `B`, `C`, `D`, `E`, `F`];
for (const vertex of vertices) {
    graph.addNode(vertex);
}

graph.addEdge(`A`, `B`, 10);
graph.addEdge(`A`, `C`, 30);
graph.addEdge(`A`, `D`, 40);
graph.addEdge(`B`, `A`, 20);
graph.addEdge(`B`, `E`, 50);
graph.addEdge(`D`, `F`, 70);
graph.addEdge(`E`, `C`, 60);
graph.addEdge(`E`, `D`, 80);
graph.addEdge(`F`, `E`, 90);

// graph.printGraph();

// A -> [{"destination":"B","weight":10},{"destination":"C","weight":30},{"destination":"D","weight":40}]
// B -> [{ "destination": "A", "weight": 20 }, { "destination": "E", "weight": 50 }]
// C -> []
// D -> [{"destination":"F","weight":70}]
// E -> [{ "destination": "C", "weight": 60 }, { "destination": "D", "weight": 80 }]
// F -> [{ "destination": "E", "weight": 90 }]

console.log(`dfs`);
console.log(graph.dfs(`A`));