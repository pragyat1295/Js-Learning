// function x() {
//     var a = 7;

//     function y() {
//         console.log(a); // this means it will find the reference to the a not its value. (during closure)
//     }
//     a = 100;
//     return y;  // this return y means it will return the "whole function y itself" 
//                 // wherever the function will get invoked. In our case it is line no. 12.
//                 // -------------- or we can return a function like this as well =======================

//     // return function y() {
//     //     console.log(a);
//     // }
// // ========================================================================================

//     // y();
    

// }

// x()(); // this is valid too.

// var z = x(); // you can declare the function in a variable only when you are returning the invoking function's value.
// console.log(z);


// //..........
// a = 18;
// z();

// ====================================================================================================================================


// -------------- Closures with setTimeout ------------------------

// function time() {
//     var i = 10;
//     setTimeout(function () {
//         console.log(i);
//     }, 3000)
// }
// time();
// console.log("After time");

// print the number after each second added to the number ie 1 after 1sec, 2 after 2sec ....

// 1) wrong approach

// for(var i = 1; i<=5; i++) {
//     setTimeout(function () {
//         console.log(i);
//     }, i*1000);
// }

// 2) correct approach

// You have to wrap the setTimeout function to a function 
// using closures, it will get called and assign a new value to the scope.

// for(var i = 1; i<= 5; i++) {
//     function close(num) {
//         setTimeout(function () {
//             console.log(num);
//         }, num*1000);
//     }
//     close(i);
// }
// we are calling this function close(i) it will give the argument and create a new space
// for each i.

// -----------------------------------------------------------------------------------------------
// abc(); // abc is not defined
function def() {
    console.log('DEF called');
}
// def();

// setTimeout(function abc() {
//     console.log('abc called');
// }, 5000);
// abc(); 
// First it will show abc is not defined 
// and then call this function after 5 seconds and fills the call stack
// tht's why we are advised to perform async operation at last because they will fill the callStack again.
// def(); // it won't work here

abc();
function abc() {
    setTimeout(function() {
        console.log('ABC called');
    }, 5000);
}

const date = new Date().toLocaleDateString('ja')

console.log(date);

const bird = {
    size: 'small',
  };
  
  const mouse = {
    name: 'Mickey',
    small: 27,
  };

  console.log(mouse['small']); // one of the way to see the value of a key in an object

//   function bark() {
//     console.log('Woof!');
//   }
  
//   bark.animal = 'dog';
//   console.log(bark());

// const a = [1,2,3];
// console.log(typeof(a));
// const numbers = [1, 2, 3];
// numbers[10] = 11;
// console.log(numbers);

// const person = {
//     name: 'Lydia',
//     age: 21,
//   };
  
//   let city = person.city;
// //   console.log(city);
//   city = 'Amsterdam';
  
//   console.log(person);
// //   console.log(city);

function checkAge(age) {
    // let message;
    if (age < 18) {
        let message = "Sorry, you're too young.";
    } else {
        let message = "Yay! You're old enough!";
    }
  
    return message;
    // now this message will be blocked scoped so won't be accessable.
  }

  console.log(checkAge(21));