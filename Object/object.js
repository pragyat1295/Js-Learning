// Object based questions:

// Que1: Output of the following program:

// const obj = {
//     a: 3,
//     b: 1,
//     a: 10,
// }
// console.log(obj); 

// ------------------------------------------------------------------------------------------

// Que2: create a function multiplyByTwo(obj) which multiply all the numeric values by 2

// let obj = {
//     a: 3,
//     b: 7,
//     c: 'Hello',
// }

// let multiplyByTwo = function(obj) {
//     for(key in obj) {
//         if(typeof obj[key] !== 'string') {
//             obj[key] *=2;
//         }
//     }
// }

// multiplyByTwo(obj);

// console.log(obj);

// -----------------------------------------------------------------------------------------

// Que3: Output for the following code:

// const a = {};
// const b = {key: 'b'};
// const c = {key: 'c'};

// a[b] = 123;
// a[c] = 456;

// console.log(a[b]);


// -----------------------------------------------------------------------------------------

// Que4: What is JSON.stringify and JSON.parse?
const obj = {name: 'Pragyat', age: 27};

const stringObj = JSON.stringify(obj);
console.log(stringObj); // it converts the object keys to string
const strToObj = JSON.parse(stringObj);
console.log(strToObj); // it converts the string converted keys to object again
// it is used to save the value inside the local storage (because it is stored in string format)
localStorage.setItem('test', stringObj); 
// it stores the value in local storage in the form of key-value pair and this key should be in the string format.

