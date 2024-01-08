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
        console.log("parent" ,this);
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

    // printStack() {
    //     for(let i=0; i<this.size(); i++) {
    //         console.log(`stack ---> ${i}=>${this.stack[i]}`)
    //     }
    // }
}

class PrintStack extends Stack {
    constructor(stack) {
        super(stack);
        // this.arr = stack;
    }
    printStack() {
        for(let i=0; i<this.stack.size(); i++) {
            console.log(`stack ---> ${i}=>${this.stack.stack[i]}`)
        }
        // console.log("child", this.arr.push(9))
        console.log("child", this.stack)
    }
}

let stack = new Stack();

stack.push(5);
stack.push(6);
stack.push(9);
stack.push(1);

let newStack = new PrintStack(stack, []);

console.log(stack.top());
newStack.printStack()