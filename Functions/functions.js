// // Que1 Declare the Function:

// // Named function
// function namedFunc() {
//     console.log('Named Function');
// }
// namedFunc();

// // Annonymous function 

// let annonymousFunc = function () {
//     console.log('This is annonymous function');
// }

// annonymousFunc();

// // function Expression

// let funcExpression = function abc() {
//     console.log('abc');
// }

// funcExpression();

// // Arrow Function

// let arrowFunc = () => console.log('Arrow Function');
// arrowFunc();

// // -----------------------------------------------------------------------------------

// // Q3 First class functions

// // Those functions in which we can be pass a function as an argument or return a functions from it.

// // let firstOrderFn = function(fn) {
// //     fn();
// // }

// // function a() {
// //     console.log('a');
// // }

// // firstOrderFn(a);

// // function b() {
// //     return function() {
// //         console.log('b rturned');
// //     }
// // }

// // let returnF = b();
// // returnF();

// // ----------------------------------------------------------------------------------

// // Q4: What IIFE?

// // IIFE: Stands for the immediately invoked functions. 
// // They will get invoked as they soon as they defined.
// // (function() {
// //     console.log("This is IIFE");
// // })();

// // (function(num) {
// //     num = 10;
// //     console.log(num*num);
// // })(5);

// // ----------------------------------------------------------------------------------

// // Q5 Output of this code

// // (function(x) {
// //     return (function(y) {
// //         console.log(x);
// //     })(2)
// // })(1);

// // ---------------------------------------------------------------------------------

// // Q6 Functional Scope

// // Read from the notes

// // ---------------------------------------------------------------------------------

// // Q7 Function scope Output based question

// // for(let i =0; i<5; i++) {
// //     setTimeout(function() {
// //         console.log(i);
// //     }, 1000*i);
// // }

// // --------------------------------------------------------------------------------

// // Q8 Function Hoisting

// // myName(); // invoke the function before defining it. Called hoisting.

// // function myName() {
// //     console.log(x);
// //     var x = 8;
// //     console.log('Pragyat Mishra');
// // }

// // -------------------------------------------------------------------------------

// // Q9 Output of the code

// var x = 21;

// var fun = function() {
//     console.log(x);
//     var x = 20;
// }

// fun();

// // -------------------------------------------------------------------------------

// // Q10 Spread vs rest

// // function multiply(...nums)  { // rest operator
// //     console.log(nums[0] * nums[1]);
// // }

// // var  arr = [5,6];
// // multiply(...arr); // spread operator

// // -------------------------------------------------------------------------------

// // Q11 Output of the code

// // var func = function(a, x, ...numbers  ,y  ) { // error because rest operators can only be used at the last
// // (a,x,y, ...numbers)   
// //  console.log(a,x,y,numbers);
// // }

// // -------------------------------------------------------------------------------------

// // Q12 Callback Function

// // function calculate(fn) {
// //     // ......

// //     fn;

// //     // .............
// // }

// // function math(x) {
// //     console.log(x*x);
// // }

// // calculate(math(5));

// // // eg2 setTimeout

// // setTimeout(function() {
// //     console.log('callback function');
// // }, 5000);

// //  other eg are map, filter, reduce

// // --------------------------------------------------------------------------

// // Q13 Arrow Function with 'this' keyword

// let myName = 'Pragyat'; // gives undefined

// // var myName = 'Pragyat'; // gives the output because arrow func refer to the global object.

// let user = {
//     // myName:'Pragy',
//     func1: () => {console.log('from arrow Function', this.myName)},

//     func2() {
//         console.log('from normal function', this.myName);
//     }
// }

// // user.func1();
// user.func2();

// let user2 = {
//     myName: 'Pragy',
// }

// user.func2.call(user2);


// console.log(1);
// new Promise((res, rej) => {
//     console.log(2);
//     setTimeout(() => {
//         console.log(3);
//         res();
//     }, 0);
//     console.log(4);
// });
// console.log(5);

const promising = () => {
    new Promise((res, rej) => {
        setTimeout(() => {
            res('yay!');
        }, 0);
        rej('oops');
    });

    promising()
        .then(
            (err)=> {
                console.log('caught: ', err);
            },
            (res) => {
                console.log('recieved: ', res);
            }
        )
        .finally(()=> {
            console.log('settled');
        });
}

// promising();

