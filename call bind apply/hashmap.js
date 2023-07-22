

// The problems that I will face here are:
// 1. collision, 2. changing the key parameter from string to number.


// To convert the string into the number that we will make the index of our aray. For that we will
// create a function and convert that string to ascii code and then divide that code by the size of the
// hashmap and in this way we wil be able to push the value to that key. 

// className HashMap  {
//     constructor() {
//         this.table = new Array(2001);
//         this.size = 0;
//     }

//     setItem = (key, value) => {

//     }

//     getItem = key => {

//     }

//     hashtoInt = key => {
//         let hash = 17;

//         for(let i =0; i< key.length; i++) {
//             hash = (13 * hash * key.charCodeAt(i)) % this.size;
//         }

//         return hash;
//     }
// };

// var myHash = new HashMap();

// myHash.setItem('age: ', 26);
// myHash.setItem('name: ', 'Pragyat');

// console.log(myHash.getItem('name'));

// let str = "Ajax";

// for(let i = 0; i< str.length; i++) {
//     console.log('for character at: ', i, str.charCodeAt(i));
// }
// console.log("before char code: ", str.charCodeAt('a'));
