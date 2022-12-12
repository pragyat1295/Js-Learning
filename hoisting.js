

// ------------- Hoisting ---------------

// var x = 7;

// function getName() {
//     console.log("Hello World");
//     function c() {
//         console.log(x);
//     }
//     c();
// }

// getName();
// console.log(x);
// console.log(getName); // it will print the whole function because we can find the function at the execution phase.
// var m = getName();

// ------------------ Lexical ENvironment -----------------

function a() {
    var b = 7;
    var b = 8; // using var we can declare the same variable for different values.
    c();    
    function c() {
        console.log(b);
    }
}

a();

let x = 7;