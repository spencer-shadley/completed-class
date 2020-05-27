// **************** QUESTION DESCRIPTION **************** //

// The Ruler of HackerLand believes that every citizen of the country should have access to a library. 
// Unfortunately, HackerLand was hit by a tornado that destroyed all of its libraries and obstructed its roads! 
// As you are the greatest programmer of HackerLand, the ruler wants your help to repair the roads and build some new libraries efficiently.

// HackerLand has ncities numbered from 1 to n. The cities are connected by m bidirectional roads. A citizen has access to a library if:
//   - Their city contains a library.
//   - They can travel by road from their city to a city containing a library.

// The cost of repairing any road is c_road dollars, and the cost to build a library in any city is c_lib dollars.
// If in the above example c_road = 2 and c_lib = 3, we would build 5 roads at a cost of 5 x 2 = 10 and 2 libraries for a cost of 6.
// We don't need to rebuild one of the roads in the cycle 1->2->3->1.

// You are given  queries, where each query consists of a map of HackerLand and value of c_lib and c_road. 
// For each query, find the minimum cost of making libraries accessible to all the citizens and print it on a new line.

// Complete the function roadsAndLibraries in the editor below. It must return the minimal cost of providing libraries to all, as an integer.

// roadsAndLibraries has the following parameters:

// n: integer, the number of cities
// m: Integer, the numnber of roads
// c_lib: integer, the cost to build a library
// c_road: integer, the cost to repair a road
// cities: 2D array of integers where each cities[i] contains two integers that represent cities connected by an obstructed road.

// **************** CONSTRAINTS ************************* //



// **************** DEFINE INPUT/OUTPUT/EDGE/OUTLIER **************** //

// Input: Four Integers ((n, number of cities), (m, number of roads), (c_lib, cost of library), (c_road, cost of road))
// Output: Integer (cost)
// Edge/Outlier:

// **************** EXAMPLE **************** //

// Input:
// Output:


// Input: 
// Output:

// **************** PSEUDO CODE SOLUTION / BRAINSTORM **************** //

// If the cost of roads is greater than libraries, return cities * libraries

// Roads = [[1,3], [3, 4], [2, 4], [1, 2], [2, 3], [5, 6]]
// Build adjacentList
// Pick a node, start there, DFS from that node, build out via adjacent list
// If we haven't visited the city yet, add the cost of a raod
// If we are out of cities in our DFS, start a new search from a new node. 

// **************** FUNCTION **************** //

function minCost(n, m, cLib, cRoad, connectingRoads) {

    // If roads are expensive, no roads
    if (cLib < cRoad) {
        return cLib * n;
    }

    // I need some way to track that I've been to a city before.
    // If I see a city through DFS, it means its attached through a road. 
    let seenCities = [];
    let cities = [];
    let cost = 0;
    const newGraph = new Graph();

    for (let i = 1; i <= n; ++i) {
        newGraph.addVertex(i);
        cities.push(i);
    }

    for (let i = 0; i < connectingRoads.length; ++i) {
        let tempA = connectingRoads[i][0];
        let tempB = connectingRoads[i][1];
        newGraph.addEdge(tempA, tempB)
    }

    let j = 1;
    while (seenCities.length !== cities.length) {

        cost += cLib;

        newGraph.depthFirstSearch(newGraph.AdjList, j, seenCities, cRoad, cost);

        for (let i = 1; i < cities.length; ++i) {
            if (seenCities.indexOf(i) === -1) {
                j = i;
            }
        }

    }

    // newGraph.printGraph();
    // console.log(`This is cost: ${cost}, This is seenCities: ${seenCities}`)

}

class Graph {
    // defining vertex array and 
    // adjacent list 
    constructor(vertices) {
        this.vertices = vertices;
        this.AdjList = new Map();
    }

    // addVertex(v) 
    addVertex(v) {
        this.AdjList.set(v, []);
    }

    // addEdge(v, w) 
    addEdge(v, w) {
        // get the list for vertex v and put the 
        // vertex w denoting edge between v and w 
        this.AdjList.get(v).push(w);

        // Since graph is undirected, 
        // add an edge from w to v also 
        this.AdjList.get(w).push(v);
    }

    depthFirstSearch(AdjList, s, seenCities, cRoad, cost) {

        console.log(`This is cost: ${cost}`)
        // console.log(AdjList.get(s))
        if (seenCities.indexOf(s) === -1) {
            seenCities.push(s);
        }

        for (const v of AdjList.get(s)) {
            if (seenCities.indexOf(v) === -1) {
                seenCities.push(v);
                cost += cRoad;
                // console.log(`Inner cost: ${cost}`)
                return this.depthFirstSearch(this.AdjList, v, seenCities, cRoad, cost)
            }
        }
        return seenCities, cost;
    }

    printGraph() {
        // get all the vertices 
        let get_keys = this.AdjList.keys();

        // iterate over the vertices 
        for (let i of get_keys) {
            // great the corresponding adjacency list 
            // for the vertex 
            let get_values = this.AdjList.get(i);
            let conc = "";

            // iterate over the adjacency list 
            // concatenate the values into a string 
            for (let j of get_values)
                conc += j + " ";

            // print the vertex and its adjacency list 
            console.log(i + " -> " + conc);
        }
    }
}




console.log(minCost(6, 5, 5, 2, [[1, 3], [3, 4], [2, 4], [1, 2], [2, 3], [5, 6]]));


// **************** TESTING **************** //

class Test {
    constructor(testInput, expectedResult, actualResult) {
        this.testInput = testInput;
        this.expectedResult = expectedResult;
        this.actualResult = actualResult;
    };
};

let test1 = new Test('Test 1');
let test2 = new Test('Test 2');
let test3 = new Test('Test 3');

// console.table([
//     test1,
//     test2,
//     test3,
// ]);

// function roadsAndLibraries(n, cLib, cRoad, connCities) {
//     /* If the cost of creating a library is less than the cost of creating a road then simply create libraries in each of the cities
//       else you can use bfs to find all the connected cities and get the cost of creating a library in one city and the cost of 
//       creating roads to all its connected cities.*/

//     if (cLib < cRoad) {
//         return cLib * n;
//     }
//     var AdjList = new Map();

//     var mySet = new Set();
//     for (var i = 0; i < connCities.length; i++) {
//         mySet.add(connCities[i][0]);
//         mySet.add(connCities[i][1]);
//     }


//     var AdjList = new Map();
//     for (var i of mySet) {
//         AdjList.set(i, []);
//     }

//     for (var i = 0; i < connCities.length; i++) {
//         AdjList.get(connCities[i][0]).push(connCities[i][1]);
//         AdjList.get(connCities[i][1]).push(connCities[i][0]);
//     }

//     var getKeys = AdjList.keys();
//     var visited = {};
//     var cost = 0;
//     var count = 0;
//     for (var i of getKeys) {
//         visited[i] = false;
//         count++;
//     }
//     if (count != n) {
//         cost = cLib * (n - count);
//     }

//     var startingNode;
//     for (var prop in visited) {
//         var cities = [];
//         if (visited[prop] == false) {
//             startingNode = prop;
//             cities.push(startingNode);

//             var queueItems = [];
//             visited[startingNode] = true;

//             queueItems.push(startingNode);
//             while (!queueItems.length == 0) {
//                 var getQueueElement = parseInt(queueItems.shift());
//                 var getList = AdjList.get(getQueueElement);
//                 for (var i in getList) {
//                     var neigh = getList[i];
//                     if (!visited[neigh]) {
//                         visited[neigh] = true;
//                         cities.push(neigh);
//                         queueItems.push(neigh);
//                     }
//                 }
//             }
//             cost = cost + (cLib + cRoad * (cities.length - 1));
//         }
//     }

//     return cost;
// }



