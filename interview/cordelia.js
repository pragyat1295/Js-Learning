// Q1.. Remove duplicate without using any inbuilt function.
let arr = [1, 2, 2, 3, 4, 4, 5, 1, 3];
let output = [];

for(let i=0; i< arr.length; i++) {
    if (!output.includes(arr[i])) {
        output.push(arr[i]);
    }
}
console.log(output)

// Q2.. Reverse a string

let str = 'abc';
// cba;

function revString(str) {
    let output = '';
    
    for(let i= str.length-1; i>=0; i--) {
        output += str[i];
    }
    return output;
}
console.log(revString(str))
