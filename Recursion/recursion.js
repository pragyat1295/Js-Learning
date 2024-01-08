// Most Asked Questions

// 1. ============== Factorial of a Number ==============

let n= 5; // output = 120

function factorial(n) {
    if(n===0) {
        return 1;
    }
    return n * factorial(n-1);
}

// console.log(factorial(5));

// 2. ============== Create an Array with range of numbers ==============

// Input Start=0, end = 5 Output=[]

function rangeOfNumbers(start,end) {
    if(end < start){
        return [];
    } 
    else {
       const arr = rangeOfNumbers(start,end-1);
       arr.push(end);
       return arr;
    }
}

// console.log(rangeOfNumbers(0,5))

// 3. ============== Fobanecci of a number ==============

// input n= 5 ===>  output: 0,1,1,2,3,5 == 3;

function fib(n) {
    if(n<=1) {
        return n;
    }
    else {
        return fib(n-1) + fib(n-2);
    }
}

// console.log(fib(7));

// 4. ============== Reverse a string ==============

let str = "Hello";
// str.substring()
// let rev = '';
// for(let i=str.length-1;i>=0;i--) {
//     rev +=str[i];
// }

// console.log(str.slice(0,str.length-1));

function reverseString(str) {
    if(str.length<=0) {
        return '';
    }
    else {
       let rev = reverseString(str.slice(0,str.length-1))
       rev = str.charAt(str.length-1) + rev;
       return rev;
    }
}
function reverseStr(str) {
    if(str==="")
        return '';
    else {
        return reverseStr(str.substring(1))+str.charAt(0)
    }
}
// console.log(reverseString(str));

/* 5. ============== Given an integer array of nums of unique 
    elements, return all possible subsets (the power set)
    The Solution must not contain duplicatesubsets. Return the solution in any order ============== */

// Input: [1,2,3] ====>> Output: [[],[1],[1,2],[2],[3],[2,3],[1,3],[1,2,3]]

// ============= Backtracking Algorithm =============

/* The idea here is either we will take the element or we will not take the element and we will move forward
    like on the first iteration we will take the [1] and on the second time we will not consider [1] and we will 
    move forward with the next element which is [2]. Here as well now we have 4 cases. 
    (i) Either we will take [2] followed by [1] has been considered. In this case the array will be [1,2]
    (ii) Or we will not take [2] followed by [1] has been considered. In this case the array will be [1]
    (iii) Either we will take [2] followed by [1] has not been considered. In this case the array will be [2]
    (iV) Or we will not take [2] followed by [1] has not been considered. In this case the array will be []
    
    and so on till we reached the size of the input array. */

function getSubArr(nums) {
    let result =[];
    let temp = []; // to manupulate our cases for backtracking

    function recursiveGetSubArr(arr,i) {
        if(i=== arr.length) {
           return result.push([...temp]);
        }
        else {
            temp.push(arr[i]);
            recursiveGetSubArr(arr,i+1);
            temp.pop();
            recursiveGetSubArr(arr,i+1);
        }
    }

    recursiveGetSubArr(nums, 0)
    return result;
}

console.log(getSubArr([1,2,3]))