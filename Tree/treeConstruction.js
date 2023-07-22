// construct the tree using inorder and preorder.

class Root {
    constructor(key) {
        this.left = null;
        this.right = null;
        this.val = key;
    }
}

let preIndex = 0;

function constructTree(preOrder, inOrder, minIndex, maxIndex) {
    if(minIndex > maxIndex) {
        return null;
    }
    
    let tRoot = new Root(preOrder[preIndex++]);
    if(minIndex === maxIndex) return tRoot;
    let pos = search(tRoot.val, inOrder, minIndex, maxIndex);

    tRoot.left = constructTree(preOrder, inOrder, minIndex, pos-1);
    tRoot.right = constructTree(preOrder, inOrder, pos+1, maxIndex);

    return tRoot;
}

function search(num, arr, minIndex, maxIndex) {
    let i;
    for(i = minIndex; i<=maxIndex; i++) {
        if(arr[i] === num) {
            return i;
        }
    }
    return i;
}

function printTree(root) {
    if(root !== null) {
        printTree(root.left);
        console.log(root.val);
        printTree(root.right);
    }
}

let preOrder = ['A', 'B', 'D', 'E', 'C', 'F'];
let inOrder = ['D', 'B', 'E', 'A', 'F', 'C'];
let root = constructTree(preOrder, inOrder, 0, inOrder.length-1);

printTree(root);