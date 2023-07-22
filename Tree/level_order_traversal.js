// construct the node of the tree

class Node {
    constructor(key) {
        this.left = null;
        this.right = null;
        this.val = key;
    }
}

// insert the nodes of the tree


function insert(node, key) {
    if(node === null) {
        return new Node(key);
    }

    // create node on the left side
    if(key < node.val) {
        node.left = insert(node.left, key);
    }

    // create the node on the right side

    else if(key > node.val) {
        node.right = insert(node.right, key);
    }

    return node;
}

// print the nodes in level order traversal

function level_order_traversal(node) {
    let queue = [];

    queue.push(node);
    // console.log(node.right.val, node.left.val)
    while(queue.length != 0) {
        let temp = queue[0];
        if(temp.left != null) {
            queue.push(temp.left);
            // console.log("left", temp.left.val)

        }

        if(temp.right != null) {
            queue.push(temp.right);
            // console.log("right", temp.right.val)
        }
        console.log(temp.val);
        queue.shift();
    }
}




// insert the elements in the main function 

/*

        50
       /   \
    30      70
  /    \   /  \
20    40  60  80

*/

let root = null;

root = insert(root, 50);
root = insert(root,30);
root = insert(root,20);
root = insert(root,40);
root = insert(root,70);
root = insert(root,60);
root = insert(root,80);

level_order_traversal(root);
