// A queue is an abstract data type that maintains the order in which elements were added to it, 
// allowing the oldest elements to be removed from the front and new elements to be added to the rear. 
// This is called a First-In-First-Out (FIFO) data structure because the first element added to the queue
// (i.e., the one that has been waiting the longest) is always the first one to be removed.

// A basic queue has the following operations:

// Enqueue: add a new element to the end of the queue.
// Dequeue: remove the element from the front of the queue and return it.
// In this challenge, you must first implement a queue using two stacks. 
// Then process  queries, where each query is one of the following  types:

// 1 x: Enqueue element  into the end of the queue.
// 2: Dequeue the element at the front of the queue.
// 3: Print the element at the front of the queue.
// For example, a series of queries might be as follows:

// image

// Function Description

// Complete the put, pop, and peek methods in the editor below. They must perform the actions as described above.

// Input Format

// The first line contains a single integer, , the number of queries.

// Each of the next  lines contains a single query in the form described in the problem statement above. 
// All queries start with an integer denoting the query , but only query  is followed by an additional space-separated value, , denoting the value to be enqueued.

// Constraints

// It is guaranteed that a valid answer always exists for each query of types  and .
// Output Format

// For each query of type , return the value of the element at the front of the fifo queue on a new line.

function processData(input) {

    var inputs = input.split('\n')
    var cmd;
    var inQueue = [],
        outQueue = []
    var len;

    function inQueueToOutQueue() {
        if (outQueue.length === 0) {
            len = inQueue.length;
            while (len-- > 0) {
                outQueue.push(inQueue.pop())
            }
        }
    }

    for (var i = 1, max = inputs[0]; i <= max; i++) {
        cmd = inputs[i].split(' ');
        switch (cmd[0]) {
            case '1':
                inQueue.push(cmd[1]);
                break;
            case '2':
                inQueueToOutQueue();
                outQueue.pop()
                break;
            case '3':
                inQueueToOutQueue();
                console.log(outQueue[outQueue.length - 1])
                break;
            default:
        }
    }


}

