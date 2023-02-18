/* ----------- Higher order functions ----------

- These are the functions which are used as a variables and you can
 pass them as an argument or recieve them as a parameter.
*/

function myFUnction() {
    console.log("After this HOF is there");
    // f();

    return function retFunc() {
        console.log("returning function");
    }
}

function print() {
    console.log("Hello");
}

// myFUnction(print);

let retFun = myFUnction();

retFun();