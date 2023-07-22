/*
there are 3 types of the tree traversal:
1. Preorder traversal = root->left->right
2. Inorder traversal  = left->root->right
3. Postorder traversal = left->right->root

Preorder tree is used for ...
Inorder tree traversal is used to get the sorted tree
Postorder tree traversal is used for the deletion of the tree.
*/

class Root {
    constructor(key) {
        this.left = null;
        this.right = null;
        this.val = key;
    }
}

function insert(node, key) {
    if(node === null) {
        return new Root(key);
    }

    if(key < node.val) {
        node.left = insert(node.left, key);
    }
    else if(key > node.val) {
        node.right = insert(node.right, key);
    }

    return node;
}

// tree traversal algorithms:

// Preorder traversal

function preOrder(root) {
    if(root === null) return;

    if(root !== null) {
        console.log(root.val);
        preOrder(root.left);
        preOrder(root.right);
    }
}

// inorder traversal

function inOrder(root) {
    if(root=== null) return ;
    if(root !== null) {
        inOrder(root.left);
        console.log(root.val);
        inOrder(root.right);
    }
}

// postorder traversal

function postorder(root) {
    if(root !== null) {
        postorder(root.left);
        postorder(root.right);
        console.log(root.val);
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

preOrder(root);
console.log("-----------------------------")
// inOrder(root);
postorder(root);