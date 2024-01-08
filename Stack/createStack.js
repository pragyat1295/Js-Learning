class Stack {
    constructor(arr=[]) {
        this.stack = arr;
    }

    push(val) {
        this.stack.push(val);
    }

    pop() {
        if(this.isEmpty()) {
            return "Cannot perform pop operation."
        }
        return this.stack.pop();
    }

    top() {
        if(this.isEmpty()) {
            return "Cannot perform top operation."
        }
        return this.stack[this.size() -1];
    }

    isEmpty() {
        if(this.size() === 0) return true;
        return false;
    }

    size() {
        return this.stack.length;
    }

    printStack() {
        for(let i=0; i<this.size(); i++) {
            console.log(`stack ---> ${i}=>${this.stack[i]}`)
        }
    }
}

let stack = new Stack();

stack.push(5);
stack.push(6);
stack.push(9);
stack.push(1);

console.log(stack.pop());
stack.printStack()