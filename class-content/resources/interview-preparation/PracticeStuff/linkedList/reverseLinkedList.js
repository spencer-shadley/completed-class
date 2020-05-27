// Doubly linked lists allow us to traverse our linked list backwards
// Lookup now becomes O(n/2), which is technically still O(n), but still better. 
// Uses more memory than single list, but can be traversed two ways. 
// Great resource is the VisoAlgo Linked List website. 

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    };
};

class DoublyLinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null,
            prev: null
        };
        this.tail = this.head;
        this.length = 1;
    };

    printList() {
        const array = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        };
        console.log(array);
    };

    append(value) {
        const newNode = new Node(value);

        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    };

    prepend(value) {
        const newNode = new Node(value);

        newNode.next = this.head
        this.head.prev = newNode;
        this.head = newNode;
        this.length++;
    };

    insert(index, value) {
        const newNode = new Node(value);

        if (index >= this.length) {
            return this.append(value);
        };
        if (index === 0) {
            this.prepend(value);
            return this.printList;
        };
        const leader = this.traverseToIndex(index - 1);
        const follower = leader.next;
        leader.next = newNode;
        newNode.prev = leader;
        newNode.next = follower;
        follower.prev = newNode;
        this.length++;
    };

    remove(index) {
        // check params
        const leader = this.traverseToIndex(index - 1);
        const unwantedNode = leader.next;
        leader.next = unwantedNode.next;
        this.length--;
        return this.printList();

    };

    traverseToIndex(index) {
        // check params
        let counter = 0;
        let currentNode = this.head;
        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        };
        return currentNode;
    };

    reverse() {
        if (!this.head.next) {
            return this.head;
        }
        let first = this.head;
        this.tail = this.head;
        let second = first.next;
        while (second) {
            const temp = second.next;
            second.next = first;
            first = second;
            second = temp;
        }
        this.head.next = null;
        this.head = first;
    }
};

const myLinkedList = new DoublyLinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(2, 99);
myLinkedList.insert(20, 88);
myLinkedList.printList();
myLinkedList.reverse();
myLinkedList.printList();