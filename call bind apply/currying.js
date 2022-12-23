// ---------------------- Currying ---------------------

// Currying is a transformation of functions that translates a function
//  from callable as f(a, b, c) into callable as f(a)(b)(c).

// currying is a function that takes an argument at a time and
// returns another function expecting the next argument.

// ------- curryig using closures ---------

// create a function for the multiplication of 2 numbers;

// 1) normal way

let multiply1 = function(a,b) {
    return a*b;
}

// 2) using closures 

let multiply2 = function(a) {
    return function(b) {
        console.log(a*b);
    }
}

let multiplyBytwo = multiply2(2)(10);
// multiplyBytwo(5);

// convert the function into the currying function.

// if I give sum(a,b) it should be converted to sum(a)(b)

let curryFunc = function(f) {
    return function(a) {
        return function(b) {
            return f(a,b);
        }
    }
}

let sum = function(a,b) {
    return a+b;
}

sum = curryFunc(sum);

console.log(sum(1)); // return function which is expecting to get another argument as b


console.log(sum(1)(2));

// =============================================================

// <-------------- Questions on Currying ---------------->

// question1 sum(2)(6)(1)

let summ = function(a) {
    return function(b) {
        return function(c) {
            return a+b+c;
        }
    }
}

console.log(summ(2)(6)(1));

// .........................................................................

// question: 2-

// evaluate("sum")(4)(2) => 6
// evaluate("multiply")(4)(2) => 8
// evaluate("divide")(4)(2) => 2
// evaluate("substract")(4)(2) => 2

function evaluate(a) {
    if(typeof(a) !== 'string') {
        console.error('the first value sould be a string');
    }
    else {
        return function(b) {
            return function(c) {
                if(a === 'sum') {
                    return b+c;
                }
                else if(a === 'multiply') {
                    return b*c;
                }
                else if( a === 'divide') {
                    return b/c;
                }
                else if(a === 'substract') {
                    return a-b;
                }
                else {
                    return "Invalid operation";
                }
            }
        }
    }
}

console.log(evaluate('divide')(4)(2));
// good way to use currying:

const mul = evaluate("multiply");

// now this mul could be use n number of times for multiplication.

console.log(mul(5)(10));
console.log(mul(2)(6));

// .............................................................................

// Question 3: Infinite currying

// sum2(1)(2)(3)....(n)

function sum2(a) {
    return function(b) {
        if(b) {
            return sum2(a+b);
        }
        // the empty bracket () is for the else statement
        // if we don't have anything then just return the final sum
        // value ie a;
        else {
            return a;
        }
        
    }
}

console.log("infinite currying");
console.log(sum2(2)(6)(9)());

// ..............................................................

// Question 4 
// Diff between Currying and Partial Application

// Partial Application: It breaks a function into the functions which takes 
// less number of arguments. eg:

function partialApp(a) {
    return function(b,c) {
        return a+b+c;
    }
}

console.log("Partial Application");

console.log(partialApp(10)(2,3));
// the application of this method is while writing the URL for the 
// web developement. if https:// is common for both google and twitter.com. SO, 
// we will separate these two by using partial application and use the URL.

function partialApp2(domain) {
    return function(domainName, path) {
        return `${domain}://${domainName}/${path}`;
    }
}

let httpsURL = partialApp2("https");
let twitterURL = httpsURL('twitter.com', 'favicon.ico');
let googleURL = httpsURL('google.com');

console.log(twitterURL);

// ....................................................................................................

// Question 5:
// Convert a function f(1,2,3) to f(1)(2)(3)

function curry(func) {
    // console.log(func.length); // returning the number of arguments that has been passed to the function

    return function curried(...args) {
        if(args.length >= func.length) {
            return func(...args);
        }
        else {
            return function(...args2) {
                return curried(...args, ...args2);
            }
        }
    }
}

let checkFunc = function(a,b,c,d) {

    return a+b+c+d;
}

console.log( 'checking outside',checkFunc.length);
let checkCurry = curry(checkFunc);
console.log(checkCurry(2)(3)(4)(5));




// ===============================================

// Just curry revision 

// ===============================================

// function sum(a,b) {
//     // console.log(a+b);
//     return a+b;
// }

// let curry = function(fn) {
//     return function(a) {
//         return function(b) {
//             return fn(a,b);
//         }
//     }
// }

// let currySum = curry(sum);

// console.log(currySum(2)(3));

// let curryMultiply = function(a) {
//     return function(b) {
//         return(a*b);
//     }
// }

// console.log(curryMultiply(3)(5));

// infinite currying implementation

// curriedSum(1)(2)(3)......(n)();

// let curriedSum = function(a) {
//     return function(b) {
//         if(b) {
//             return curriedSum(a+b);
//         }
//         else return a;
//     }
// }

// console.log(curriedSum(1)(2)(8)());

// =================================================================

// Write a curry function to convert a function into a curried function for n number of parameters.

// ====================================================================

// function currying(func) {
//     return function curriedFunc(...args) {
//         if(args.length >= func.length) {
//             return func(...args);
//         }
//         else {
//             return function(...args2) {
//                 return curriedFunc(...args, ...args2);
//             }
//         }
//     }
// }


// function cSum(a,b,c,d) {
//     return a+b+c+d;
// }


// let checkCurrySum = currying(cSum); 

// console.log(checkCurrySum(1)(2)(3)(4));



