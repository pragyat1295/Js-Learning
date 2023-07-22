//  create a class to make a node of a tree

class Node {
    constructor(key) {
        this.left = null;
        this.right = null;
        this.val = key;
    }
}

// create a function to insert an element of a BST

function insert(node, key) {
    if(node === null) {
        return new Node(key);
    }

    if(key < node.val) {
        node.left = insert(node.left, key);
    }
    else if(key > node.val) {
        node.right = insert(node.right, key);
    }

    return node;
}

// print the tree

function inorder(node) {
    if(node !== null) {
        inorder(node.left);
        console.log(node.val);
        inorder(node.right);
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

root = insert(root, 50);
root = insert(root,30);
root = insert(root,20);
root = insert(root,40);
root = insert(root,70);
root = insert(root,60);
root = insert(root,80);

inorder(root);
