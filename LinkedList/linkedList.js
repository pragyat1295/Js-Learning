// console.log("Connected");

// declare the head of the linked-list.

var head;

// make a constructer to make a new class to create a new node.

class Node {

    constructor(val) {
        this.data = val;
        this.next = null;
    }
}

function printList(n) {
    // var n = head;
    while(n !== null) {
        console.log( n.data);
        // document.write(n.data + " ");
        n = n.next;
    }
}

function insertAtBeg(num) {
    var newNode = new Node(num);
    newNode.next = head;
    head = newNode;

    return head;
}

function insertAtPos(position, num) {
    let newNode = new Node(num);
    
    let temp = head;
    let listLength = 0;
    while(listLength < position-2) {
        listLength++;
        temp= temp.next;
        
    }
    console.log("temp value now", temp.data );

    let temp2 = temp.next;
    temp.next = newNode;
    newNode.next = temp2;

    return head;
}

function reverseList(head) {
    
    var current = head;
    
    var previous = null;
    var after = null;

    while(current != null) {
        after = current.next;
        current.next = previous;
        previous = current;
        current = after;
    }
    
    head = previous;
    return head;
}


head = new Node(3);
var second = new Node(5);
var third = new Node(7);

head.next = second;
second.next = third;
printList(head);

var list = insertAtBeg(1);
printList(head);

var list2 = insertAtPos(3, 6);
printList(list2);


console.log("reverse list");

head = reverseList(head);
printList(head);


