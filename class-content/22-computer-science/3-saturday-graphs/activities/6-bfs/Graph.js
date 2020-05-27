/* eslint-disable no-magic-numbers */
'use strict';

/**
 * Node for a singly-linked LinkedList
 */
class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    /**
     * Add a new value to the Queue
     * @param {*} element newly added value
     */
    enqueue(element) {
        ++this.size;
        const node = new Node(element);

        if (this.head === null) {
            this.head = node;
            this.tail = node;
            return;
        }

        this.tail.next = node;
        this.tail = node;
    }

    /**
     * Removes the first element
     * @returns {Node}
     */
    dequeue() {
        --this.size;
        const element = this.head.element;
        this.head = this.head.next;
        return element;
    }

    /**
     * @returns {Boolean}
     */
    isEmpty() {
        return this.size === 0;
    }
}

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

    bfs(start) {
        const queue = new Queue();
        queue.enqueue(start);

        const visited = new Set();
        while (!queue.isEmpty()) {
            const currentVertex = queue.dequeue();
            if (!visited.has(currentVertex)) {
                console.log(currentVertex);
                visited.add(currentVertex);
                const edges = this.adjacencyList.get(currentVertex);
                for (const { destination } of edges) {
                    queue.enqueue(destination);
                }
            }
        }
    }

    dfsRecursive(start) {
        this.visited = new Set();
        this.dfsRecursiveHelper(start);
        delete this.visited;
    }

    dfsRecursiveHelper(vertex) {
        console.log(vertex);
        this.visited.add(vertex);
        const edges = this.adjacencyList.get(vertex);
        for (const { destination } of edges) {
            if (!this.visited.has(destination)) {
                this.dfsRecursiveHelper(destination);
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
graph.dfs(`A`);

console.log(`bfs`);
graph.bfs(`A`);

