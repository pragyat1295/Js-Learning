// enqueue, dequeue, front, rear, isEmpty, printQueue

class Queue {
    constructor(arr = []) {
        this.q = arr;
    }

    enqueue(num) {
        this.q.push(num);
    }

    dequeue() {
        if(this.size() === 0) {
            return "underflow. Cannot perform dequeue operation"
        }

        return this.q.shift();
    }

    front() {
        if(this.size() === 0) {
            return "underflow. Cannot find front of the queue"
        }
        return this.q[0];
    }

    // rear() {}

    isEmpty() {
        if(this.size() === 0) return true;
        return false;
    }

    size() {
        return this.q.length;
    }

    printQueue() {
        let qString = '';

        for(let i=0; i<this.size(); i++) {
            qString += this.q[i] + '-> ' 
        }

        return qString;
    }
}

const q = new Queue();
q.enqueue(2);
q.enqueue(3);
q.enqueue(8);

console.log(q.printQueue());


console.log(q.dequeue());