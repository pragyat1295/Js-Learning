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
// const obj = {name: 'Pragyat', age: 27};

// const stringObj = JSON.stringify(obj);
// console.log(stringObj); // it converts the object keys to string
// const strToObj = JSON.parse(stringObj);
// console.log(strToObj); // it converts the string converted keys to object again
// // it is used to save the value inside the local storage (because it is stored in string format)
// localStorage.setItem('test', stringObj); 
// it stores the value in local storage in the form of key-value pair and this key should be in the string format.


// --------------------------------------------------------------------------------------------

// Que5: What is the Output of the following code?

// console.log([...'Ladiya']); // spread operator

// const arr = [...'Ladiya'];
// console.log(arr);

// --------------------------------------------------------------------------------------------

// Que6: Output?
// spread operator can be used with non-primitive datatype. ie: object and arrays.

// const user = {name: 'Pragyat', age: 27};
// const admin = {login: true, ...user}; // spread operator inside the object.

// console.log(admin);

// --------------------------------------------------------------------------------------------

// Que7: Output of the following code?

// const settings = {
//     userName: 'Pragyat',
//     level: 20,
//     health: 90,
// }

// const data = JSON.stringify(settings, ['level', 'health']);
// console.log(data);
// console.log(settings);


// ----------------------------------------------------------------------------------------------

// Que8: Output of the following code?


// const shape = {
//     radius: 10,
//     diameter() {
//         return this.radius *2; 
//     },

//     perimeter: () => {
//         2*Math.PI*this.radius
//     }, // it will represent the global object.


// }

// console.log(shape.diameter());
// console.log(shape.perimeter());

// ---------------------------------------------------------------------------------------------


// Que9: What is destructuring of an Object?
// Destructuring means taking the specific properties from an object.

// const user = {
//     namee: 'Pragyat',
//     age: 27,
// }

// const {namee} = user;
// console.log(namee);

// // you can rename the keys as well like this:
// const {age: myAge} = user;
// console.log(myAge);
// console.log(user);

// // nested destructuring: It looks very similar to the renaming the properties
// // but it is not.

// const newUser = {
//     namee: 'Vishrut Mishra',
//     age: 27,
//     fullName: {
//         first: 'Pragyat',
//         last: 'Mishra',
//     },
// }

// const {fullName: {first}} = newUser;

// console.log(first);
// // console.log(fullName);


// ----------------------------------------------------------------------------

// Que 11: Output of the code:

// const a = {
//     greet: 'hello',
// }
// let d;

// d = a;
// a.greet = 'Hiii';

// console.log(d.greet); 


// ------------------------------------------------------------------------------

// Que 12: Output of the code:

// console.log({a: 1} == {a: 1});
// console.log({a:1} === {a:1});

// -----------------------------------------------------------------------------

// Que13: output of the code

// let a = {aa: '12'};
// let memory = [a];
// a = null; // the object is stored in the memory[0] so it won't affect the array at all.
// console.log(memory);

// --------------------------------------------------------------------------------


// Que14: Output of the code

// const value = {number: 10};

// const multiply = (x= {...value}) => {
//     console.log(x.number*=2);
// }

// const value2 = {number: 20};

// multiply();
// multiply();
// multiply(value);
// multiply(value);


// ------------------------------------------------------------------------------

// Que15: Output of the code

function changeObj(person) {
    person.age = 25;

    person = {
        name: 'PM',
        age: 27,
    }
    return person;
}

const obj1 = {
    name: 'VM',
    age: 28,
}

const obj2 = changeObj(obj1);

console.log(obj1);
console.log(obj2);

// ---------------------------------------------------------------

// Output of the following code

let testObj = {a: 11};
let testObj2 = {b: 22};

// circular infinite operation
testObj.key = testObj2;
testObj2.key = testObj;

console.log(testObj);
console.log(testObj2);

function test() {
    let testObj = {a: 11};
    let testObj2 = {b: 22};

    // circular infinite operation
    testObj.key = testObj2;
    testObj2.key = testObj;

    console.log(testObj);
    console.log(testObj2);

    return 'abc';
}

// test();

