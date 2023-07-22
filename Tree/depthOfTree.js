/* we will solve this problem recursively.
    - First create the tree
    - Then write the function to get the depth of the tree. 
 */

// create the constructor of the BST.
class Node {
    constructor(key) {
        this.left = null;
        this.right = null;
        this.val = key;
    }
}

// write the function to create the BST

function createTree(node, key) {
    if(node === null) {
        return new Node(key)
    }

    if(key < node.val) {
        node.left = createTree(node.left, key);
    }
    else {
        node.right = createTree(node.right, key);
    }

    return node;
}

// get the height of the tree:

function heightOfTree(root) {
    if(root === null) {
        return 0;
    }

    let l_height = heightOfTree(root.left);
    let r_height = heightOfTree(root.right);

    if(l_height > r_height) {
        return l_height +1;
    }
    else {
        return r_height +1;
    }
}


// insert the elements in the main function 

/*

        50
       /   \
    30      70
  /    \   /  \-
20    40  60  80

*/

let root = null;

root = createTree(root, 50);
root = createTree(root,30);
root = createTree(root,20);
root = createTree(root,40);
root = createTree(root,70);
root = createTree(root,60);
root = createTree(root,80);
root = createTree(root,10);

// function invocation to get the depth of the tree.

let height = heightOfTree(root);

console.log("height/depth of the tree is", height);


